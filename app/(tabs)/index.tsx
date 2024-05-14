import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AnimatedSplashScreen from "@/components/SplashScreen";
import OnBoardingItem from "../main";
import { useNavigation } from "@react-navigation/native";

const OnBoarding = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("OnBoardingItem");
    }, 2500);

    return () => clearTimeout(timer); // Clear the timer to avoid memory leaks
  }, [navigation]);

  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="none">
      <Stack.Screen name="Splash" component={AnimatedSplashScreen} />
      <Stack.Screen name="OnBoardingItem" component={OnBoardingItem} />
    </Stack.Navigator>
  );
};

export default OnBoarding;
