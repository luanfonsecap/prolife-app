import React from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/global/theme";

import { Routes } from "./src/routes";
import { LogoFixa } from './src/screens/LogoFixa';
import { AppContainer } from './src/global/styles';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" backgroundColor="#312e38" />
        <AppContainer>
          <Routes />
        </AppContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
