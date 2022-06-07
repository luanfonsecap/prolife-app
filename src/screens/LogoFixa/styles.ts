import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  padding-top: 8px;
  position: absolute;
  top: 24px;
  right: 35%;
`;

export const Image = styled.Image`
  width: 150px;
  height: 55px;  
  margin-left: auto;
  margin-right: auto;
`;
