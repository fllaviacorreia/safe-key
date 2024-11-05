// Importa o container de navegação e o tipo de navegação em pilha (stack) do React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa as telas de Login e Registro para uso na navegação
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/register";

// Cria uma instância do stack navigator, que gerencia a navegação em pilha
const Stack = createNativeStackNavigator();

// Função principal que configura a navegação da aplicação
export default function AppNavigation() {
    return (
        // NavigationContainer fornece o contexto de navegação para os componentes filhos
        <NavigationContainer>
            
            {/* Configura o stack navigator com as telas de Login e Register.
                Define screenOptions para ocultar o cabeçalho padrão em todas as telas */}
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                
                {/* Define a tela de Login como um "Screen" no stack navigator, 
                    onde "name" representa o nome da rota e "component" a tela a ser renderizada */}
                <Stack.Screen name="Login" component={LoginScreen} />
                
                {/* Define a tela de Register como outra rota no stack navigator */}
                <Stack.Screen name="Register" component={RegisterScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}
