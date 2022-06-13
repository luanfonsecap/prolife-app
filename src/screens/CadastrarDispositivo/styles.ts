import { RFValue } from "react-native-responsive-fontsize";

import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  margin: 0 24px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 600;
  text-align: center;
`;

export const Background = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
  padding: 24px;
  position: relative;
`;

export const Label = styled.Text`
  font-size: ${RFValue(20)}px;
`;

export const InputContainer = styled.View`
  margin: 8px 0;
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

export const ContainerTitle = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 20px;
  padding: 4px;
  left: 50%;
  transform: translateX(-50px);
  top: 12px;
  position: absolute;
  width: 160px;
  `;

  