// Importa a função StyleSheet do React Native e o tema personalizado
import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

// Define os estilos usando StyleSheet.create
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Estilo para o contêiner do título
    containerSearch: {
        justifyContent: 'space-around',           // Centraliza verticalmente
        alignItems: 'center',               // Centraliza horizontalmente
        flexDirection: 'row',
        width: '100%',
        height: 100,
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
        position: 'absolute',
        bottom: 0,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,

    },
});

export default styles;
