import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Routes } from "./src/routes";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="#312e38" />
      <Routes />
    </SafeAreaProvider>
  );
}
