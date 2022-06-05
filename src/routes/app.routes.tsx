import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LogoFixa } from "../screens/LogoFixa";
import { Login } from "../screens/Login";
import { Menu } from "../screens/Menu";

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="LogoFixa" component={LogoFixa} />
      <Screen name="Login" component={Login} />
      <Screen name="Menu" component={Menu} />
    </Navigator>
  );
}

export { AppRoutes };
