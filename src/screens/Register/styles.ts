import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.secondary};
  margin: auto 24px;
  border-radius: 20px;
  padding: 24px;
`;

export const Logo = styled.Image`
  margin-bottom: 18px;
`;

export const Title = styled.Text`
  margin: 0 auto;
  font-size: ${RFValue(24)}px;
`;

export const ContainerInput = styled.View`
  margin: 8px 0;
`;

export const Label = styled.Text`
  font-size: ${RFValue(20)}px;
`;

export const Input = styled.TextInput`
  background: ${({ theme }) => theme.colors.light};
  padding: 10px 8px;
  border-radius: 12px;
`;

export const Button = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  margin-top: 12px;
  padding: 8px 16px;
  border-radius: 16px;
  min-width: 140px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  text-align: center;
`;
