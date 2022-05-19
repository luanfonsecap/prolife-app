import React, { useState } from "react";
import { Alert } from "react-native";

import ProLifeLogo from "../../../assets/images/logo.png";
import { httpClient } from "../../api/httpClient";
import {
  Button,
  Container,
  ContainerInput,
  Input,
  Label,
  Logo,
  TextButton,
  Title,
} from "./styles";

// <div></div> = <View>
// <h1><h2><span> = <Text>
// <input />  = <TextInput />
// <img src="www" /> = <Image />

function Login() {
  const [name, setName] = useState("");
  const [registration, setRegistration] = useState("");

  function handleSubmitCredentials() {
    if (name === "") {
      Alert.alert("Por favor, digite um nome válido");
      return;
    }

    if (registration === "") {
      Alert.alert("Por favor, digite uma matrícula válida");
      return;
    }

    try {
      // TODO Requisição para o backend
    } catch (error) {}
  }

  return (
    <Container>
      <Logo source={ProLifeLogo} />

      <Title>Entrar</Title>

      <ContainerInput>
        <Label>Nome:</Label>
        <Input
          placeholder="Digite o nome"
          onChangeText={(text) => setName(text)}
        />
      </ContainerInput>

      <ContainerInput>
        <Label>Matrícula:</Label>
        <Input
          placeholder="Digite a matrícula"
          onChangeText={(text) => setRegistration(text)}
        />
      </ContainerInput>

      <Button onPress={handleSubmitCredentials}>
        <TextButton>Iniciar</TextButton>
      </Button>
    </Container>
  );
}

export { Login };
