import React from "react";
import { ScrollView, StyleSheet } from "react-native";
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
      <SafeAreaView style={styles.container} className="flex-1 pb-5">
        <NavBar />
        <ScrollView className="flex-1 pb-5">
          <TabScreen />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default FavScreen;
