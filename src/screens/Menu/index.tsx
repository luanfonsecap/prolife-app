import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { BMenu, TMenu, Container, SafeContainer } from "./styles";

const Menu = () => (
    <SafeContainer>
      <Container>
          <BMenu>
              <TMenu>Cadastrar Dispositivo</TMenu>
          </BMenu>
          <BMenu>
              <TMenu>Formulário</TMenu>
          </BMenu>
          <BMenu>
              <TMenu>Visualizar Resultado</TMenu>
          </BMenu>
      </Container>
    </SafeContainer>
);

export { Menu };
