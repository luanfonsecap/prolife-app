import React, { useState } from "react";
import { Alert, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, Title, Background, Button, Label, TextButton, Input, ContainerTitle, InputContainer } from "./styles";
import { LogoFixa } from "../LogoFixa";
import { httpClient } from "../../api/httpClient";

export function CadastrarDispositivo() {
  const [device_name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [serie_number, setSerieNumber] = useState("");

  const navigation = useNavigation();

  async function handleSubmitForm() {
    if (device_name === "") {
      Alert.alert("Por favor, digite um nome válido");
      return;
    }

    if (brand === "") {
      Alert.alert("Por favor, digite uma marca válida");
      return;
    }

    if (model === "") {
      Alert.alert("Por favor, digite um modelo válido");
      return;
    }

    if (serie_number === "") {
      Alert.alert("Por favor, digite um número série válida");
      return;
    }

    const data = {
      brand,
      device_name,
      model,
      serie_number,
    }

    try {
      await httpClient.post('/devices', data)
      Alert.alert('Dispositivo cadastrado com sucesso');
      navigation.goBack();
    } catch (err: any) {
      console.log(err.response);

      Alert.alert('Ocorreu um erro ao registrar o dispositivo, tente novamente.')
    }
  }

  return (
    <Container>
      <LogoFixa />

      <Background>
        <ContainerTitle>
          <Title>Cadastrar Dispositivo</Title>
        </ContainerTitle>

        <KeyboardAvoidingView>
          <InputContainer>
            <Label>Nome:</Label>
            <Input placeholder="Digite o Nome:"
              onChangeText={(text) => setName(text)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Marca:</Label>
            <Input placeholder="Digite a marca:"
              onChangeText={(text) => setBrand(text)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Modelo:</Label>
            <Input placeholder="Digite o modelo:"
              onChangeText={(text) => setModel(text)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Série:</Label>
            <Input placeholder="Digite a série:"
              onChangeText={(text) => setSerieNumber(text)}
            />
          </InputContainer>
          <Button><TextButton onPress={handleSubmitForm}>Salvar</TextButton></Button>

        </KeyboardAvoidingView>
      </Background>

    </Container>
  )

}
