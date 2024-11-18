// Importa os componentes Text, TextInput e View do React Native e os estilos personalizados
import { Text, TextInput, TextInputProps, View } from "react-native";
import { forwardRef } from "react";
import styles from "./styles";
import global from '../../../styles/global';

// Define o tipo InputProps, que inclui as propriedades de TextInput e uma propriedade personalizada 'title'
type InputProps = TextInputProps & {
    title: string; // Título que descreve o campo de entrada
    error: string | undefined;
};

// Função principal do componente Input com forwardRef
const Input = forwardRef<TextInput, InputProps>(({ title, error, ...rest }, ref) => {
    const invalid = !!error;

    return (
        // Contêiner do input com o estilo básico
        <View style={styles.container}>
            
            {/* Exibe o título acima do campo de entrada, usando o estilo de texto global */}
            <Text style={global.text}>{title}</Text>
            
            {/* Campo de entrada de texto com estilo personalizado.
                Aplica tanto o estilo específico de 'input' quanto o estilo global de texto.
                Repassa todas as propriedades adicionais de TextInput usando '...rest'. */}
            <TextInput style={[styles.input, global.text]} ref={ref} {...rest}/>
            { invalid && <Text style={{color: "red"}}>{error}</Text>}
        </View>
    );
});

export default Input;
