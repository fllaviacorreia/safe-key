// Importa os componentes Text e View do React Native e o componente personalizado Button
import { Text, View } from "react-native";
import Button from "../../components/buttons/button";

import { RoutesParams } from "../../navigation/routesParams";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

// Define o tipo de navegação para a tela de registro
type registerParamsList = NativeStackNavigationProp<RoutesParams, 'Register'>;

// Função principal do componente RegisterScreen
export default function RegisterScreen() {
    
    // Configura a navegação usando o hook useNavigation com o tipo registerParamsList
    const navigation = useNavigation<registerParamsList>();

    return (
        // Contêiner principal da tela de registro
        <View>
            
            {/* Título da tela de registro */}
            <Text>Registro</Text>
            
            {/* Botão que permite voltar para a tela anterior usando a função goBack */}
            <Button title="Voltar" className="primary" onPress={() => navigation.goBack()} />
        </View>
    );
}
