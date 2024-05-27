import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { useColorScheme } from "@/components/useColorScheme";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    SandBold: require("../assets/fonts/sand/static/Quicksand-Bold.ttf"),
    SandRegs: require("../assets/fonts/sand/static/Quicksand-Regular.ttf"),
    SandSemi: require("../assets/fonts/sand/static/Quicksand-SemiBold.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  const configGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId:
        "39748502508-e55qmc98brq5r523csnn1eq2ssduabsm.apps.googleusercontent.com",
    });
  };
  useEffect(() => {
    configGoogleSignIn(); // will execute everytime the component mounts
  }, []);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }} initialRouteName='index'>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='index' options={{ headerShown: false }} />
        {/* <Stack.Screen name='modal' options={{ presentation: "modal" }} /> */}
      </Stack>
    </ThemeProvider>
  );
}
