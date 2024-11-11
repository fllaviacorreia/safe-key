import { Alert, Text, TextInput, View } from "react-native";
import global from "../../styles/global";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import { Route, RouteProp, useNavigation } from "@react-navigation/native";
import Input from "../../components/inputs/input";
import styles from "./styles";
import Button from "../../components/buttons/button";
import { useEffect, useRef, useState } from "react";
import IconButton from "../../components/buttons/iconButton";

import * as Clipboard from 'expo-clipboard';
import Toast from "react-native-toast-message";
import { ToastAndroid } from "react-native";

type editKeyParamsList = NativeStackNavigationProp<RoutesParams, 'EditKey'>;

export default function EditKeyScreen({ route }: any) {
    const navigate = useNavigation<editKeyParamsList>();
    const data = route?.params || {};

    const [isEditable, setIsEditable] = useState(false); // Inicialmente desabilitado

    // Criação de referências para os inputs
    const titleRef = useRef<TextInput>(null);
    const usernameRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    useEffect(() => {
        if (isEditable) {
            if (titleRef.current) {
                titleRef.current.focus();
            }
        }
    }, []);
    const buttonPrimaryTitle = isEditable ? 'Salvar' : 'Editar';
    const buttonWarningTitle = isEditable ? 'Cancelar' : 'Voltar';

    const handleSubmit = () => {
        if (isEditable) {
            // Salvar as alterações
            setIsEditable(false);
        } else {
            // Ativar edição
            setIsEditable(true);
        }
    }

    const copyToClipboard =  async (data: string) => {
        await Clipboard.setStringAsync(data);
        
        ToastAndroid.show(
            'Copiado para clipboard',
            ToastAndroid.SHORT

        );
    };
    return (
        <View style={[global.container, styles.container]}>
            <View style={styles.dataContainer}>
                <View style={styles.itemData}>
                    <Input
                        title="Título"
                        placeholder={data.title}
                        value={isEditable ? data.title : ''}
                        returnKeyType="next"
                        editable={isEditable}
                        ref={titleRef}
                        onSubmitEditing={() => usernameRef.current?.focus()}
                    />
                    {
                        isEditable ? (
                            <></>
                        ) : (
                            <IconButton className="transparent" icon="copy" onPress={() => copyToClipboard(data.title)} />
                        )
                    }

                </View>
                <View style={styles.itemData}>
                    <Input
                        title="Usuário"
                        placeholder={data.username}
                        value={isEditable ? data.username : ''}
                        returnKeyType="next"
                        editable={isEditable}
                        ref={usernameRef}
                        onSubmitEditing={() => passwordRef.current?.focus()}
                    />
                    {
                        isEditable ? (
                            <></>
                        ) : (
                            <IconButton className="transparent" icon="copy" onPress={() => copyToClipboard(data.username)} />
                        )
                    }

                </View>
                <View style={styles.itemData}>
                    <Input
                        title="Senha"
                        placeholder={data.password}
                        value={isEditable ? data.password : ''}
                        secureTextEntry
                        editable={isEditable}
                        returnKeyType="done"
                        ref={passwordRef}
                        onSubmitEditing={() => navigate.goBack()}
                    />
                    {
                        isEditable ? (
                            <></>
                        ) : (
                            <IconButton className="transparent" icon="copy" onPress={() => copyToClipboard(data.password)} />
                        )
                    }

                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={{ width: '40%' }}>
                    <Button className="warning" title={buttonWarningTitle} onPress={() => navigate.goBack()} />
                </View>
                <View style={{ width: '40%' }}>
                    <Button className="primary" title={buttonPrimaryTitle} onPress={() => handleSubmit()} />
                </View>
            </View>
        </View>
    );
}