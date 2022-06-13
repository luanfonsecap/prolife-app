import React, { useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { httpClient } from '../../api/httpClient';
import { LogoFixa } from '../LogoFixa';

import { Card, Container, Label, Row, Section, Title } from './styles';

interface IResult {
  id_result: string;
  date_hour: string;
  device: {
    brand: string;
    device_name: string;
    id_device: number;
    model: string;
    serie_number: string;
  },
  employee: {
    emp_name: string,
    id_employee: number,
    registry: string,
  },
  measured_value: string,
  result_desc: "aprovado" | "reprovado",
}

export function Results() {
  const [results, setResults] = useState<IResult[]>([]);

  const renderItem = ({ item }: { item: IResult }) => (
    <Card >
      <Row>
        <Section>
          <Label>Dispositivo:</Label>
          <Text>{item.device.device_name}</Text>
        </Section>

        <Section>
          <Label>Número de série:</Label>
          <Text>{item.device.serie_number}</Text>
        </Section>
      </Row>


      <Row>
        <Section>
          <Label>Funcionário:</Label>
          <Text>{item.employee.emp_name}</Text>
        </Section>

        <Section>
          <Label>Valor Mensurado:</Label>
          <Text>{item.measured_value}</Text>
        </Section>
      </Row>

      <Row>
        <Section>
          <Label>Modelo:</Label>
          <Text>{item.device.model}</Text>
        </Section>

        <Section>
          <Label>Marca:</Label>
          <Text>{item.device.brand}</Text>
        </Section>
      </Row>

      <Row>
        <Section>
          <Label>Data:</Label>
          <Text>{item.date_hour}</Text>
        </Section>
      </Row>


      <Label>Resultado:</Label>
      <Text>{item.result_desc.toUpperCase()}</Text>
    </Card>
  );

  useEffect(() => {
    async function fetchResults() {
      try {
        const response = await httpClient.get('/results');
        setResults(response.data.results);
      } catch {
        Alert.alert('Houve um erro ao recuprar os resultados');
      }
    }

    fetchResults();
  }, []);

  return (
    <Container>
      <LogoFixa />

      <Title>Listagem de resultados</Title>

      <FlatList
        keyExtractor={item => String(item.id_result)}
        renderItem={renderItem}
        data={results}
        style={{ maxHeight: 400 }}
      />
    </Container>
  );
}
