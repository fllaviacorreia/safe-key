// Importa os componentes Text e View do React Native, além dos componentes personalizados Input e Button
import { Text, View, TextInput } from "react-native";
import Input from "../../components/inputs/input";
import Button from "../../components/buttons/button";
import { RoutesParams } from "../../navigation/routesParams";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import styles from "./styles";
import global from "../../styles/global";
import { useRef } from "react";

// Define o tipo de navegação para a tela de Login
type loginParamsList = NativeStackNavigationProp<RoutesParams, "Login">;

// Função principal do componente LoginScreen
export default function LoginScreen() {
    
    // Configura a navegação usando o hook useNavigation com o tipo loginParamsList
    const navigation = useNavigation<loginParamsList>();

    // Criação de referências para os inputs
    const passwordRef = useRef<TextInput>(null);

    return (
        <View style={global.container}>
            
            {/* Container para o título do aplicativo */}
            <View style={styles.containerTitle}>
                {/* Título estilizado */}
                <Text style={[global.title, styles.title]}>SafeKey</Text> 
            </View>
            
            {/* Container para o formulário de login */}
            <View style={styles.containerForm}>
                
                {/* Campo de entrada para o usuário com um título e um placeholder */}
                <Input 
                    title="Usuário" 
                    placeholder="Seu nome de usuário" 
                    returnKeyType="next" 
                    onSubmitEditing={() => passwordRef.current?.focus()}
                    autoCapitalize="none"  
                />
                
                {/* Campo de entrada para a senha com secureTextEntry para ocultar a senha */}
                <Input 
                    title="Senha" 
                    placeholder="Sua senha" 
                    secureTextEntry 
                    ref={passwordRef} 
                    autoCapitalize="none"  
                    returnKeyType="done" 
                />
                
                {/* Container para a opção de manter o usuário conectado */}
                <View style={styles.containerCheckbox}>
                    {/* Checkbox para a opção "Mantenha-me conectado" */}
                    <Checkbox /> 
                    <Text style={[styles.textCheckbox, global.text]}>Mantenha-me conectado</Text>
                </View>
                
                {/* Botão de login */}
                <Button title="Login" className="primary" onPress={() => navigation.navigate("Home")}/>
            </View>
            
            {/* Container para os botões de navegação adicionais */}
            <View style={styles.containerButtons}>
                
                {/* Botão "Esqueci minha senha" que navega para a tela de redefinição de senha */}
                <Button title="Esqueci minha senha" className="transparent" onPress={() => navigation.navigate("ResetPassword")}/>
                
                {/* Botão "Cadastrar" que navega para a tela de cadastro */}
                <Button title="Cadastrar" className="warning" onPress={() => navigation.navigate("Register")} />
            </View>
        </View>
    );
}
