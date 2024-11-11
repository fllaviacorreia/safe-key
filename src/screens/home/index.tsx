// Importa os componentes Text e View do React Native e o componente personalizado Button
import { KeyboardAvoidingView, Platform, Text, TextInput, View, ScrollView, FlatList } from "react-native";
import Button from "../../components/buttons/button";

import { RoutesParams } from "../../navigation/routesParams";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import global from "../../styles/global";
import Input from "../../components/inputs/input";
import SimpleInput from "../../components/inputs/simpleInput";
import IconButton from "../../components/buttons/iconButton";
import Card from "../../components/cards/card";
import keys from "../../mock/keys";
// Define o tipo de navegação para a tela de registro
type homeParamsList = NativeStackNavigationProp<RoutesParams, 'Home'>;

// Função principal do componente RegisterScreen
export default function HomeScreen() {

    // Configura a navegação usando o hook useNavigation com o tipo registerParamsList
    const navigation = useNavigation<homeParamsList>();
    const data = keys;
    

    return (
        <View style={global.container}>
            {/* Container para o título do aplicativo */}
            <View style={styles.containerSearch}>
                <SimpleInput placeholder="Pesquisar uma senha" />
                <IconButton className="primary" icon="search" />
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
                <FlatList
                    data={keys}
                    keyExtractor={item => item.toString()}
                    renderItem={({ item }) => (
                        <View>
                            <Card title={item.title} createdAt={item.createdAt} id={item.id.toString()} />
                        </View>

                    )}
                />
            </ScrollView>
        </View>

    );
}
