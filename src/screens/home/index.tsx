// Importa os componentes Text e View do React Native e o componente personalizado Button
import { View, ScrollView, FlatList } from "react-native";

import { RoutesParams } from "../../navigation/routesParams";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import global from "../../styles/global";
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
    
    return (
        <View style={[global.container, styles.container]}>
            {/* Container para o título do aplicativo */}
            <View style={styles.containerSearch}>
                <SimpleInput placeholder="Pesquisar uma senha" />
                <IconButton className="primary" icon="search" />
            </View>
                <FlatList
                    data={keys}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View id={item.id.toString()}>
                            <Card data={{...item, id: item.id.toString()}} />
                        </View>

                    )}
                />
                <View style={styles.containerButtons} >
            <IconButton className="primary" icon="plus-circle" onPress={() => navigation.navigate('NewKey')} />
                </View>
        </View>

    );
}
