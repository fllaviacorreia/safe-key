import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native";
import global from "../../styles/global";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/inputs/input";
import styles from "./styles";
import Button from "../../components/buttons/button";
import { useEffect, useRef } from "react";

type profileParamsList = NativeStackNavigationProp<RoutesParams, 'EditProfile'>;

export default function EditProfileScreen() {
    const navigate = useNavigation<profileParamsList>();
    const nameRef = useRef<TextInput>(null);
    const usernameRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);
    const newPasswordRef = useRef<TextInput>(null);
    const confirmNewPasswordRef = useRef<TextInput>(null);

    useEffect(() => {
        if (nameRef.current) {
            nameRef.current.focus();
        }
    })
    return (
        <KeyboardAvoidingView
            style={[{ flex: 1 }, global.container]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Ajusta o offset para iOS
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }} keyboardShouldPersistTaps="handled">
                   
                        <Input
                            title="Nome completo"
                            placeholder="Ana Silva"
                            ref={nameRef}
                            returnKeyType="next"
                            onSubmitEditing={() => usernameRef.current?.focus()}
                        />
                        <Input
                            title="Usuário"
                            placeholder="anajulia"
                            ref={usernameRef}
                            returnKeyType="next"
                            onSubmitEditing={() => passwordRef.current?.focus()}
                            autoCapitalize="none"
                        />
                        <Input
                            title="Senha atual"
                            placeholder="*********"
                            secureTextEntry
                            ref={passwordRef}
                            returnKeyType="next"
                            onSubmitEditing={() => newPasswordRef.current?.focus()}
                            autoCapitalize="none"
                        />
                        <Input
                            title="Nova senha"
                            placeholder="sua nova senha"
                            secureTextEntry
                            ref={newPasswordRef}
                            returnKeyType="next"
                            onSubmitEditing={() => confirmNewPasswordRef.current?.focus()}
                            autoCapitalize="none"
                        />
                        <Input
                            title="Confirmar nova senha"
                            placeholder="repita a nova senha"
                            secureTextEntry
                            ref={confirmNewPasswordRef}
                            returnKeyType="done"
                            autoCapitalize="none"
                            onSubmitEditing={() => navigate.goBack()}
                        />
                    
                   
               
            </ScrollView>
            <View style={styles.buttonsContainer}>
                        <View style={{ width: '40%' }}>
                            <Button className="warning" title="Cancelar" onPress={() => navigate.goBack()} />
                        </View>
                        <View style={{ width: '40%' }}>
                            <Button className="primary" title="Salvar" onPress={() => navigate.goBack()} />
                        </View>
                    </View>
        </KeyboardAvoidingView >
    );
}