import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/auth/LoginScreen";
import SplashScreen from "../screens/auth/SplashScreen";
import { NativeBaseProvider } from "native-base";
import homeScreenT from "../screens/teacher pages/HomeScreenT";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import ServicePage from "../screens/teacher pages/ServicePage";
import EndDayScreen from "../screens/teacher pages/EndDayScreen";
const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="EndDayScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
          <Stack.Screen name="homeScreenT" component={homeScreenT} />
          <Stack.Screen name="ServicePage" component={ServicePage} />
          <Stack.Screen name="EndDayScreen" component={EndDayScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
