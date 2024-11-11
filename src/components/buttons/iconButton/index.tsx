// Importa os componentes necessários do React Native e os estilos personalizados
import { Pressable, PressableProps, Text, View } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";

// Define os possíveis estilos de botão como um tipo (primary, warning, error e transparent)
type StyleKeys = 'primary' | 'warning' | 'error';
type IconsKeys = 'edit' | 'plus-circle' | 'search' | 'trash';
// Define as propriedades do botão, incluindo as de Pressable e propriedades personalizadas
type ButtonProps = PressableProps & {
    icon: IconsKeys;         // Icone do botão
    className: StyleKeys; // Estilo do botão, que determina a aparência
};

// Função principal do componente Button
export default function IconButton({ icon, className, ...rest }: ButtonProps) {
    return (
        // Contêiner do botão com o estilo básico
        <View style={styles.container}>
            <Pressable style={[styles[className], styles.button]} {...rest}>
            <FontAwesome name={icon} size={22} color="white" />
            </Pressable>
        </View>
    );
}
