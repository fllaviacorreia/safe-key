// Importa o container de navegação e o tipo de navegação em pilha (stack) do React Navigation
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

// Importa as telas de Login, Registro, Redefinição de Senha e Home para uso na navegação
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/register";
import ResetPasswordScreen from "../screens/resetPassword";
import HomeScreen from "../screens/home";
import { useState } from "react";
import { Appbar, Menu, Provider } from "react-native-paper";
import { RoutesParams } from "./routesParams";
import ProfileScreen from "../screens/profile";
import NewKeyScreen from "../screens/newKey";
import EditKeyScreen from "../screens/editKey";
import EditProfileScreen from "../screens/profile/edit";
import { useAuth } from "../context/authContext";



// Cria uma instância do stack navigator, que gerencia a navegação em pilha
const Stack = createNativeStackNavigator();



type ModalParamsList = NativeStackNavigationProp<RoutesParams>;
// Função principal que configura a navegação da aplicação
export default function AppNavigation() {
    // Componente de Menu para o header
    const MenuHeader = () => {
        const [visible, setVisible] = useState(false);

        const openMenu = () => setVisible(true);
        const closeMenu = () => setVisible(false);
        const navigation = useNavigation<ModalParamsList>();

        const goToProfile = () => {
            closeMenu()
            navigation.navigate("Profile");
        }

        return (
            <Menu
                visible={visible}
                style={{ marginTop: 65 }}
                onDismiss={closeMenu}
                anchor={
                    <Appbar.Action icon="menu" color="black" onPress={openMenu} />
                }
            >
                <Menu.Item onPress={() => goToProfile()} title="Perfil" />
                <Menu.Item onPress={() => navigation.navigate("Login")} title="Sair" />
            </Menu>
        );
    };

    const { isAuthenticated, isFirstAccess } = useAuth();

    return (
        <Provider>
            <NavigationContainer>
                {
                    isAuthenticated ?

                        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">

                            <Stack.Screen
                                name="Home"
                                component={HomeScreen}
                                options={{
                                    headerShown: true,
                                    title: "SafeKey",
                                    headerRight: () => <MenuHeader />,
                                    headerBackVisible: false,
                                    headerTitleStyle: { fontFamily: 'Title' }
                                }}
                            />
                            <Stack.Screen
                                name="Profile"
                                component={ProfileScreen}
                                options={{
                                    headerShown: true,
                                    title: "Meu perfil",
                                    headerTitleStyle: { fontFamily: 'Title' }
                                }}
                            />
                            <Stack.Screen
                                name="EditProfile"
                                component={EditProfileScreen}
                                options={{
                                    headerShown: true,
                                    title: "Editando perfil",
                                    headerTitleStyle: { fontFamily: 'Title' }
                                }}
                            />

                            <Stack.Screen
                                name="NewKey"
                                component={NewKeyScreen}
                                options={{
                                    headerShown: true,
                                    title: "Novo registro",
                                    headerTitleStyle: { fontFamily: 'Title' }

                                }}
                            />
                            <Stack.Screen
                                name="EditKey"
                                component={EditKeyScreen}
                                options={{
                                    headerShown: true,
                                    title: "Detalhes",
                                    headerTitleStyle: { fontFamily: 'Title' },
                                }}
                            />
                        </Stack.Navigator>
                        :
                        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={isFirstAccess ? "Register" : "Login"}>
                            <Stack.Screen name="Login" component={LoginScreen} />
                            <Stack.Screen name="Register" component={RegisterScreen} />
                            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
                        </Stack.Navigator>
                }
            </NavigationContainer>
        </Provider>
    );
}
