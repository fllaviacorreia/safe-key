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
import { Formik } from "formik";
import LoginSchema from "../../validators/login";
import { useAuth } from "../../context/authContext";

// Define o tipo de navegação para a tela de Login
type loginParamsList = NativeStackNavigationProp<RoutesParams, "Login">;

// Função principal do componente LoginScreen
export default function LoginScreen() {
    const { login } = useAuth();

    // Configura a navegação usando o hook useNavigation com o tipo loginParamsList
    const navigation = useNavigation<loginParamsList>();

    // Criação de referências para os inputs
    const passwordRef = useRef<TextInput>(null);

    const onSubmitting = async (value: { username: string, password: string, keepConnected: boolean }) => {
        try {
            await login(value);
        } catch (e) {
            alert("Erro ao logar.")
        }
    }

    return (
        <View style={global.container}>

            {/* Container para o título do aplicativo */}
            <View style={styles.containerTitle}>
                {/* Título estilizado */}
                <Text style={[global.title, styles.title]}>SafeKey</Text>
            </View>

            {/* Container para o formulário de login */}
            <View style={styles.containerForm}>
                <Formik
                    initialValues={{ username: '', password: '', keepConnected: false }}
                    validationSchema={LoginSchema}
                    onSubmit={(value) => onSubmitting(value)}
                >
                    {
                        ({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }) => (
                            <View>
                                <Input
                                    title="Usuário"
                                    placeholder="Seu nome de usuário"
                                    returnKeyType="next"
                                    onSubmitEditing={() => passwordRef.current?.focus()}
                                    autoCapitalize="none"

                                    value={values.username}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    error={touched.username ? errors.username : ""}

                                />

                                <Input
                                    title="Senha"
                                    placeholder="Sua senha"
                                    secureTextEntry
                                    ref={passwordRef}
                                    autoCapitalize="none"
                                    returnKeyType="done"

                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    error={touched.password ? errors.password : ""}
                                />

                                <View style={styles.containerCheckbox}>
                                    <Checkbox value={values.keepConnected} onValueChange={(value) => setFieldValue('keepConnected', value)} />
                                    <Text style={[styles.textCheckbox, global.text]}>Mantenha-me conectado</Text>
                                </View>

                                <Button title="Login" className="primary" onPress={handleSubmit as any} />
                            </View>

                        )
                    }
                </Formik>
            </View>

            {/* Container para os botões de navegação adicionais */}
            <View style={styles.containerButtons}>

                {/* Botão "Esqueci minha senha" que navega para a tela de redefinição de senha */}
                <Button title="Esqueci minha senha" className="transparent" onPress={() => navigation.navigate('ResetPassword')} />

                {/* Botão "Cadastrar" que navega para a tela de cadastro */}
                <Button title="Cadastrar" className="warning" onPress={() => navigation.navigate("Register")} />
            </View>
        </View>
    );
}
