import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
  padding: 24px;
  min-height: 400px;
`

export const Label = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-top: 32px;
`;

export const Button = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  margin-top: auto;
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

