import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { httpClient } from '../../api/httpClient';
import { getItem } from '../../utils/storage';
import { ITest } from '../SelectForm';

import { Button, Container, ContainerInput, FormContainer, Input, Label, TextButton, Title, TypeTest } from './styles';

interface SelectFormParams {
  route: {
    params: {
      test: ITest;
      id_device: number;
    }
  }
}

export function Form({ route }: SelectFormParams) {
  const [measuredValue, setMeasuredValue] = useState('');
  const [resultDesc, setResultDesc] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const { test, id_device } = route.params;

  const handleSendTestResult = async () => {
    setLoading(true);
    // const id_employee = await getItem('@Prolife:id_user');

    // if (!id_employee) {
    //   Alert.alert('Faça login novamente!');
    //   navigation.navigate('Login');
    //   return;
    // }

    if (!measuredValue) {
      Alert.alert('Digite um valor de resultado para o teste');
      return;
    }

    try {
      await httpClient.post('/results', {
        id_device,
        id_employee: 1,
        result_desc: measuredValue,
        measured_value: resultDesc,
        tests: [{ id_test: test.id_test }]
      })

      Alert.alert('Salvo com sucesso!');
    } catch (err) {
      console.log(err);

      Alert.alert('Ocorreu um erro ao enviar o teste!', 'Tente novamente');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>

      <FormContainer>
        <Title>{test?.test_name}</Title>
        <TypeTest>{test?.test_type?.type_desc}</TypeTest>



        <ContainerInput>
          <Label>Valor:</Label>
          <Input
            placeholder="Digite o valor para este teste"
            onChangeText={(text) => setResultDesc(text)}
          />
        </ContainerInput>

        <ContainerInput>
          <Label>Resultado:</Label>
          <Input
            placeholder="Digite o resultado para este teste"
            onChangeText={(text) => setMeasuredValue(text)}
          />
        </ContainerInput>

        {loading ? (<ActivityIndicator color="red" size="large" />) : (
          <Button onPress={handleSendTestResult}>
            <TextButton>
              Salvar
            </TextButton>
          </Button>
        )}
      </FormContainer>
    </Container>
  );
}
