import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "react-native-splash-screen";
import AnimatedSplashScreen from "@/components/SplashScreen";

const Stack = createStackNavigator();

const Layout: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={AnimatedSplashScreen} />
        {/* Add more screens here  headerMode="none"*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
