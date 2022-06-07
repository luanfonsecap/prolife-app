import React, { useState } from "react";
import { Alert, ScrollView, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
import { setItem } from "../../utils/storage";

function Register() {
  const [name, setName] = useState("");
  const [registration, setRegistration] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  async function handleSubmitCredentials() {
    if (name === "") {
      Alert.alert("Por favor, digite um nome");
      return;
    }

    if (registration === "") {
      Alert.alert("Por favor, digite uma matrícula");
      return;
    }


    if (username === "") {
      Alert.alert("Por favor, digite um nome de usuário");
      return;
    }

    if (password === "") {
      Alert.alert("Por favor, digite uma senha");
      return;
    }

    const data = {
      employee: {
        emp_name: name,
        registry: registration
      },
      login: username,
      password,
      user_role: 1
    }


    try {
      const response = await httpClient.post('/register', data)
      Alert.alert('Usuário cadastrado com sucesso!')
      setItem('username', response.data.login);
      navigation.navigate('Login')
    } catch {
      Alert.alert('Erro ao cadastrar usuário! Tente novamente mais tarde.')
    }
  }

  function handleNavigateToRegister() {
    navigation.navigate("Register");
  }

  return (
    <Container>
      <ScrollView>
        <Logo source={ProLifeLogo} />

        <Title>Entrar</Title>

        <KeyboardAvoidingView>

          <ContainerInput>
            <Label>Nome:</Label>
            <Input
              placeholder="Digite seu nome"
              onChangeText={(text) => setName(text)}
            />
          </ContainerInput>



          <ContainerInput>
            <Label>Matrícula:</Label>
            <Input
              placeholder="Digite uma matrícula"
              onChangeText={(text) => setRegistration(text)}
            />
          </ContainerInput>

          <ContainerInput>
            <Label>Nome de usuário:</Label>
            <Input
              placeholder="Digite um nome de usuário"
              onChangeText={(text) => setUsername(text)}
            />
          </ContainerInput>

          <ContainerInput>
            <Label>Senha:</Label>
            <Input
              placeholder="Digite uma senha"
              onChangeText={(text) => setPassword(text)}
            />
          </ContainerInput>

          <Button onPress={handleSubmitCredentials}>
            <TextButton>Salvar</TextButton>
          </Button>

        </KeyboardAvoidingView>
      </ScrollView>
    </Container>
  );
}

export { Register };
