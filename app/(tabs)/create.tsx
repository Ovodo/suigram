import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export default function FavScreen() {
  return (
    <MaskedView
      style={{ flex: 1, flexDirection: "row", height: "100%" }}
      maskElement={
        <View
          style={{
            // Transparent background because mask is based off alpha channel.
            backgroundColor: "transparent",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: "black",
              fontWeight: "bold",
            }}
          >
            Basic Mask
          </Text>
        </View>
      }
    >
      {/* Shows behind the mask, you can put anything here, such as an image */}
      {/* <View style={{ flex: 1, height: "100%", backgroundColor: "#324376" }} />
      <View style={{ flex: 1, height: "100%", backgroundColor: "#F5DD90" }} />
      <View style={{ flex: 1, height: "100%", backgroundColor: "#F76C5E" }} />
      <View style={{ flex: 1, height: "100%", backgroundColor: "#e1e1e1" }} /> */}
      <LinearGradient
        colors={["#475777", "#14213D"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      ></LinearGradient>
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
