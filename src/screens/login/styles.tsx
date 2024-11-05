// Importa a função StyleSheet do React Native e o tema personalizado
import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

// Define os estilos usando StyleSheet.create
const styles = StyleSheet.create({
    
    // Estilo para o contêiner principal da tela de login
    container: {
        flexDirection: 'column',            // Organiza os elementos em uma coluna
        width: '100%',                      // Largura total da tela
        paddingHorizontal: 20,              // Espaçamento nas laterais
        height: '100%',                     // Altura total da tela
        backgroundColor: theme.light.background // Cor de fundo, vinda do tema
    },

    // Estilo para o contêiner do título
    containerTitle: {
        justifyContent: 'center',           // Centraliza verticalmente
        alignItems: 'center',               // Centraliza horizontalmente
        height: '20%',                      // Ocupa 20% da altura total da tela
        width: '100%',                      // Largura total
    },

    // Estilo específico para o título
    title: {
        fontWeight: 'bold',                 // Texto em negrito
        color: theme.light.success          // Cor do texto do título, vinda do tema
    },

    // Estilo para o contêiner do formulário de login
    containerForm: {
        flexDirection: 'column',            // Organiza os campos do formulário em coluna
        justifyContent: 'flex-end',         // Alinha os elementos na parte inferior
        height: '60%',                      // Ocupa 60% da altura total da tela
        width: '100%',                      // Largura total
        paddingBottom: 50                   // Espaçamento inferior
    },

    // Estilo para o contêiner dos botões de navegação
    containerButtons: {
        flexDirection: 'column',            // Organiza os botões em coluna
        alignItems: 'center',               // Centraliza os botões horizontalmente
        justifyContent: 'space-around',     // Distribui os botões de forma uniforme
        height: '20%',                      // Ocupa 20% da altura total da tela
    },

    // Estilo para o contêiner do checkbox
    containerCheckbox: {
        flexDirection: 'row',               // Organiza o checkbox e o texto lado a lado
        alignItems: 'center',               // Centraliza verticalmente o checkbox e o texto
        justifyContent: 'flex-start',       // Alinha os elementos à esquerda
        width: '100%',                      // Largura total
        height: 70                          // Altura fixa do contêiner
    },

    // Estilo para o texto do checkbox
    textCheckbox: {
        marginLeft: 10,                     // Espaçamento à esquerda do checkbox
        color: theme.light.text,            // Cor do texto, vinda do tema
        fontSize: 16                        // Tamanho do texto
    },
});

export default styles;
