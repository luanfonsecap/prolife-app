import React from "react";
import { View, Text } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { Container, Image } from "./styles";
import Logo from '../../../assets/images/LogoFixa.png'
const LogoFixa = () => (
  <Container>
    <Image source={Logo}/> 

    
  </Container>
);

export { LogoFixa };
