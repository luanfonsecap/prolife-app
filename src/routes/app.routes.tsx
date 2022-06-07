import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Menu } from "../screens/Menu";
import { Register } from "../screens/Register";
import { SelectForm } from "../screens/SelectForm";
import { Results } from "../screens/Results";

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Menu" component={Menu} />
      <Screen name="Home" component={Home} />
      <Screen name="SelectForm" component={SelectForm} />
      <Screen name="Results" component={Results} />
    </Navigator>
  );
}

export { AppRoutes };
