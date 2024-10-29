# Safe Key

Safe Key é um aplicativo de gerenciamento de senhas seguro e fácil de usar, desenvolvido em React Native com Expo. Este aplicativo permite que os usuários armazenem e gerenciem suas senhas de forma segura, protegendo seus dados com criptografia e autenticação.

## Índice

- [Características](#características)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Segurança](#segurança)
- [Licença](#licença)

## Características

    Armazenamento seguro de senhas: Guarda suas senhas com criptografia local.
    Autenticação de usuário: Acesso ao aplicativo usando usuário e senha cadastrados.
    Busca rápida: Encontre senhas rapidamente por nome.
    Interface intuitiva: Design simples e fácil de usar.

## Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

    React Native
    Expo
    React Navigation - Navegação entre telas
    AsyncStorage - Armazenamento local de dados
    Expo Secure Store - Armazenamento seguro de senhas
    Expo Local Authentication - Autenticação biométrica e por PIN

## Pré-requisitos

    Node.js (>= 14.x)
    Expo CLI (>= 5.x): `npm install -g expo-cli`
    Um dispositivo ou emulador para testar o app

## Instalação

  ### Clone o repositório:

   `git clone https://github.com/seu-usuario/safe-key.git`

  ### Acesse o diretório do projeto:
  
    `cd safe-key`

  ###  Instale as dependências:

    `npm install`

   ### Inicie o projeto com o Expo:

    `expo start`

    Abra o aplicativo Expo Go no seu dispositivo (ou utilize um emulador) e leia o QR Code para ver o app em ação.

## Uso

    Cadastro de usuário: Ao iniciar o aplicativo, crie uma conta para começar a usar o Safe Key.
    Adicionar senha: No painel principal, clique em "+" e insira os detalhes (nome, usuário, senha).
    Organização e busca: As senhas podem ser pesquisadas pelo nome.

## Segurança

    Criptografia: Todas as senhas são armazenadas de forma criptografada.
    Autenticação: Utilize biometria (se disponível) ou PIN para adicionar uma camada de segurança ao aplicativo.
    Armazenamento seguro: Safe Key usa o Expo Secure Store para garantir a segurança dos dados sensíveis.


## Licença

Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
