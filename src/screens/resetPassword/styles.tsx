// Importa a função StyleSheet do React Native e o tema personalizado
import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

// Define os estilos usando StyleSheet.create
const styles = StyleSheet.create({
    // Estilo para o contêiner do título
    containerTitle: {
        justifyContent: 'center',           // Centraliza verticalmente
        alignItems: 'center',               // Centraliza horizontalmente
        
        marginTop: 10,                   // Margem superior
    },

    // Estilo específico para o título
    title: {
        fontWeight: 'bold',                 // Texto em negrito
        color: theme.light.success          // Cor do texto do título, vinda do tema
    },

    // Estilo para o contêiner do formulário de login
    containerForm: {        
        justifyContent: 'center',                              // Ocupa 60% da altura total da tela
    },

    // Estilo para o contêiner dos botões de navegação
    containerButtons: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,

    },
});

export default styles;
