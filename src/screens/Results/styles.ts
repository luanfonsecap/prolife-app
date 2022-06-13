import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  font-size: ${RFValue(16)}px;
  margin-top: 8px;
  font-weight: bold;
`;

export const Card = styled.View`
  border-radius: 20px;
  padding: 8px 16px;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary};
  margin: 8px 0;
`;

export const Section = styled.View`
  margin: 0 8px;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 6px 0;
`;
