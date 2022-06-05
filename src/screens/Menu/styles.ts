import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #d7dbda;
  border-radius: 10px;
  elevation: 3;
  padding: 20px;
`;

export const SafeContainer = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
  padding: 0px 30px 0px 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: 600;
`;

export const TMenu = styled.Text`
  color: #000;
  textAlign: center;
`;

export const BMenu = styled.TouchableOpacity`
  elevation: 5;
  border-radius: 10px;
  background-color: #fff;
  padding: 30px;
  margin: 15px 0px 15px 0px;
`;
