import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import UploadScreen from "@/components/UploadScreen";

export default function FavScreen() {
  return (
    <View className='mt-12 h-full'>

      <UploadScreen />

      {/* Shows behind the mask, you can put anything here, such as an image */}
      {/* <View style={{ flex: 1, height: "100%", backgroundColor: "#324376" }} />
      <View style={{ flex: 1, height: "100%", backgroundColor: "#F5DD90" }} />
      <View style={{ flex: 1, height: "100%", backgroundColor: "#F76C5E" }} />
      <View style={{ flex: 1, height: "100%", backgroundColor: "#e1e1e1" }} /> */}
      {/* <LinearGradient
        colors={["#475777", "#14213D"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      ></LinearGradient> */}
    </View>
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
