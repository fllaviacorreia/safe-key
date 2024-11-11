import { Alert, Text, View } from "react-native";
import global from "../../styles/global";
import IconButton from "../../components/buttons/iconButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/inputs/input";
import styles from "./styles";
type profileParamsList = NativeStackNavigationProp<RoutesParams, 'Profile'>;

export default function ProfileScreen() {
    const navigation = useNavigation<profileParamsList>();
    
    return (
        <View style={[global.container, styles.container]}>
            <View style={styles.dataContainer}>
                <Input title="Nome completo" placeholder="Ana Silva" />
                <Input title="Usuário" placeholder="anajulia" />
                <Input title="Criado em" placeholder="10 de julho de 2022" />
            </View>
            <View style={styles.buttonsContainer}>
                <IconButton className="error" icon="trash" onPress={() => navigation.navigate("Login")} />
                <IconButton className="warning" icon="edit" onPress={() => navigation.navigate("EditProfile")} />
            </View>
        </View>
    );
}