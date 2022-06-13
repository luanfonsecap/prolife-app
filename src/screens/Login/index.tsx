import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, ActivityIndicator, ScrollView } from "react-native";
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


function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function handleSubmitCredentials() {
    if (userName === "") {
      Alert.alert("Por favor, digite um nome de usuário");
      return;
    }

    if (password === "") {
      Alert.alert("Por favor, digite uma senha");
      return;
    }

    const data = {
      login: userName,
      password,
    }

    setLoading(true);

    try {
      const response = await httpClient.post("/login", data);

      setItem('@Prolife:token', response.data.access_token);
      setLoading(false);

      httpClient.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`

      navigation.navigate('Menu');
    } catch (err: any) {
      setLoading(false);

      if (err.response.status === 401) {
        Alert.alert(
          'Usuário ou senha incorretos',
          'Verifique suas credenciais e tente novamente.'
        )
        return;
      }

      Alert.alert("Erro ao fazer login");
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
        <KeyboardAvoidingView behavior="padding">
          <ContainerInput>
            <Label>Nome de usuário:</Label>
            <Input
              placeholder="Digite seu nome de usuário"
              onChangeText={(text) => setUsername(text)}
            />
          </ContainerInput>

          <ContainerInput>
            <Label>Senha:</Label>
            <Input
              placeholder="Digite sua senha"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </ContainerInput>

          {loading && (<ActivityIndicator color="red" size="large" />)}


          {!loading && (
            <Button onPress={handleSubmitCredentials}>
              <TextButton>Iniciar</TextButton>
            </Button>
          )}

          <Button onPress={handleNavigateToRegister}>
            <TextButton>Cadastrar</TextButton>
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </Container>
  );
}

export { Login };
