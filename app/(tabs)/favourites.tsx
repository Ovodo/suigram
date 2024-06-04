import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import NavBar from "@/components/NavBar";
import TabScreen from "@/components/app-favorities/TabScreen";
import { useThemeColor } from "@/components/Themed";

const FavScreen = () => {
  const bg = useThemeColor("background");
  const styles = StyleSheet.create({
    container: {
      // paddingBottom: 40,
      backgroundColor: bg,
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} className="flex-1">
        <NavBar />
        <View className="flex-1">
          <TabScreen />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default FavScreen;
