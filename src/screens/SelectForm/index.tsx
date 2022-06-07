import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

import { LogoFixa } from "../LogoFixa";
import { SafeContainer } from '../Menu/styles';

import { Button, Container, Label, TextButton } from './styles';

export function SelectForm() {
  const [devices, setDevices] = useState([]);
  const [tests, setTests] = useState([]);

  const [device, setDevice] = useState('');
  const [test, setTest] = useState('');

  return (
    <SafeContainer>
      <LogoFixa />

      <Container>
        <Label>Selecione o dispositivo</Label>
        <Picker
          style={{
            backgroundColor: '#fff',
          }}
          onValueChange={(itemValue: string) =>
            setDevice(itemValue)
          }>
          <Picker.Item label="Option" value="Option" />
          <Picker.Item label="Option" value="Option" />
        </Picker>

        <Label>Selecione o teste</Label>
        <Picker
          style={{
            backgroundColor: '#fff',
          }}
          onValueChange={(itemValue: string) =>
            setTest(itemValue)
          }>
          <Picker.Item label="Option" value="Option" />
          <Picker.Item label="Option" value="Option" />
        </Picker>

        <Button>
          <TextButton>Próximo</TextButton>
        </Button>
      </Container>
    </SafeContainer>

  );
}
