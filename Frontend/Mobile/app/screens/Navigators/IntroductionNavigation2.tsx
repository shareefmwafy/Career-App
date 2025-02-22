import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Introduction1 from "../Login/introduction1";
import Introduction2 from "../Login/introduction2";
import Login from "../Login/Login";
import ForgotPassword from "../Login/ForgetPassword";
import ProfileNavigator from "./ProfileNavigator";
import Main from "./Main";
import SignUpNavigator from "./SignupNavigation";
import { SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();

const IntroductionNavigation = () => (
  <Stack.Navigator
    initialRouteName="Introduction1"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Introduction1" component={Introduction1} />
    <Stack.Screen name="Introduction2" component={Introduction2} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen
      name="SignUp"
      component={SignUpNavigator}
      options={{ headerStyle: { backgroundColor: "white" } }}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{ headerStyle: { backgroundColor: "white" } }}
    />
    <Stack.Screen name="Main" component={Main} />
    <Stack.Screen
      name="ProfileNavigator"
      component={ProfileNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default IntroductionNavigation;
