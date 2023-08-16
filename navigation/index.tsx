import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/auth/LoginScreen";
import SplashScreen from "../screens/auth/SplashScreen";
import { NativeBaseProvider } from "native-base";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import ServicePage from "../screens/teacher pages/ServicePage";
import EndDayScreen from "../screens/teacher pages/EndDayScreen";
import EndDaySelectScreen from "../screens/teacher pages/EndDaySelectScreen";
import ParentMessageScreen from "../screens/teacher pages/ParentMessageScreen";
import ParentMessageSelectScreen from "../screens/teacher pages/ParentMessageSelectScreen";
import AnnouncementScreen from "../screens/teacher pages/AnnouncementScreen";
import CurriculumScreen from "../screens/teacher pages/CurriculumScreen";
import NewsletterScreen from "../screens/teacher pages/NewsletterScreen";
import FoodCalendar from "../screens/teacher pages/FoodCalendar";
import HomeScreenT from "../screens/teacher pages/HomeScreenT";
const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
          <Stack.Screen name="HomeScreenT" component={HomeScreenT} />
          <Stack.Screen name="ServicePage" component={ServicePage} />
          <Stack.Screen name="EndDayScreen" component={EndDayScreen} />
          <Stack.Screen name="EndDaySelectScreen" component={EndDaySelectScreen} />
          <Stack.Screen name="ParentMessageScreen" component={ParentMessageScreen} />
          <Stack.Screen name="ParentMessageSelectScreen" component={ParentMessageSelectScreen} />
          <Stack.Screen name="AnnouncementScreen" component={AnnouncementScreen} />
          <Stack.Screen name="CurriculumScreen" component={CurriculumScreen} />
          <Stack.Screen name="NewsletterScreen" component={NewsletterScreen} />
          <Stack.Screen name="FoodCalendar" component={FoodCalendar} />


        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
