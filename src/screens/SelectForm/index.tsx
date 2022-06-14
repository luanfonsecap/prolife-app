import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { httpClient } from '../../api/httpClient';
import { LogoFixa } from "../LogoFixa";
import { SafeContainer } from '../Menu/styles';

import { Button, Container, Label, TextButton } from './styles';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { useNavigation } from '@react-navigation/native';

interface IDevice {
  "brand": string;
  "device_name": string;
  "id_device": string;
  "model": string;
  "serie_number": string;
}

export interface ITest {
  "id_test": number;
  "id_test_type": number;
  "max_value": number,
  "min_value": number,
  "test_name": string,
  "test_type": {
    "id_test_type": number,
    "type_desc": string
  }
}

interface ITestOption {
  id: number;
  name: string;
  children?: ITestOption[];
}

export function SelectForm() {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [tests, setTests] = useState<ITest[]>([]);

  const [deviceId, setDeviceId] = useState(0);
  const [selectedTestId, setSelectedTestId] = useState(0);

  const [selectedTest, setSelectedTest] = useState({} as ITest);

  const navigation = useNavigation();

  const handleNavigateForm = () => {
    navigation.navigate('Form', { id_device: deviceId, test: selectedTest })
  }

  useEffect(() => {
    async function getDevices() {
      try {
        const response = await httpClient.get<{ devices: IDevice[] }>('/devices');

        setDevices(response.data.devices)
      } catch {
        Alert.alert('Ocorreu um erro ao buscar os dispositivos cadastrados, tente novamente.')
      }
    }

    async function getTests() {
      try {
        const response = await httpClient.get<{ tests: ITest[] }>('/tests');

        const formattedTests: ITestOption[] = [];

        response.data.tests.forEach(test => {
          const indexTestType = formattedTests.findIndex(formattedTest =>
            formattedTest.name === test.test_type.type_desc
          )

          if (indexTestType === -1) {
            formattedTests.push({
              id: test.id_test_type,
              name: test.test_type.type_desc,
              children: [{ name: test.test_name, id: test.id_test }]
            })
            return;
          }


          formattedTests[indexTestType]?.children?.push({ name: test.test_name, id: test.id_test });
        });

        setTests(response.data.tests)
      } catch {
        Alert.alert('Ocorreu um erro ao buscar os dispositivos cadastrados, tente novamente.')
      }
    }


    getDevices();
    getTests();
  }, []);

  useEffect(() => {
    setSelectedTest(tests.find(test => test.id_test === selectedTestId)!)
  }, [selectedTestId]);

  console.log('deviceId', deviceId);


  return (
    <SafeContainer>
      <LogoFixa />

      <Container>
        <Label>Selecione o dispositivo</Label>
        <Picker
          style={{
            backgroundColor: '#fff',
          }}
          selectedValue={String(deviceId)}
          onValueChange={(itemValue: string) =>
            setDeviceId(Number(itemValue))
          }>
          {devices.map(device => (
            <Picker.Item
              key={device.id_device}
              label={device.device_name}
              value={device.id_device}
            />
          ))}
        </Picker>

        <Label>Selecione os testes</Label>
        <Picker
          style={{
            backgroundColor: '#fff',
          }}
          selectedValue={String(selectedTestId)}
          onValueChange={(itemValue: string) =>
            setSelectedTestId(Number(itemValue))
          }>
          {tests.map(test => (
            <Picker.Item
              key={test.id_test}
              label={test.test_name}
              value={test.id_test}
            />
          ))}
        </Picker>

        <Button>
          <TextButton onPress={handleNavigateForm}>Próximo</TextButton>
        </Button>
      </Container>
    </SafeContainer>

  );
}
