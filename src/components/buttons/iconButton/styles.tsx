// Importa a função StyleSheet do React Native para criar estilos e o tema personalizado
import { StyleSheet } from "react-native";
import { theme } from "../../../../theme";

// Define os estilos usando StyleSheet.create
const styles = StyleSheet.create({
    
    // Estilo do contêiner principal do botão, definindo largura e altura
    container: {
        width: 70,  // Largura total
        height: 65,     // Altura fixa do contêiner
        paddingVertical: 10, // Margem vertical para separar do texto ou outros elementos
    },

    // Estilo base do botão, aplicado em conjunto com os estilos específicos (ex: primary, warning)
    button: {
        width: '100%',             // Largura total do botão
        height: 45,                // Altura fixa do botão
        borderRadius: 25,          // Bordas arredondadas para uma aparência circular
        alignItems: 'center',      // Alinhamento centralizado do conteúdo horizontalmente
        justifyContent: 'center',  // Alinhamento centralizado do conteúdo verticalmente
        color: theme.light.backgroundInputs, // Cor do texto do botão (ajustada pelo tema)
    },

    // Estilo para o botão primário, usando uma cor de fundo de sucesso do tema
    primary: {
        backgroundColor: theme.light.success, // Cor de fundo para o botão primário
    },

    // Estilo para o botão de aviso (warning), usando cor de aviso do tema
    warning: {
        backgroundColor: theme.light.warning, // Cor de fundo para o botão de aviso
    },

    // Estilo para o botão de erro, usando cor de erro do tema
    error: {
        backgroundColor: theme.light.error, // Cor de fundo para o botão de erro
    },

    // Estilo para o botão transparente, onde o fundo usa a cor de background do tema
    transparent: {
        backgroundColor: theme.light.background, // Cor de fundo transparente
    },
});

export default styles;
