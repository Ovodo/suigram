import React from "react";
import { Text, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { TextProps } from "react-native";
import { actuatedNormalizeVertical } from "@/style/stylesheet";

const GradientText = ({
  name,
  focused,
}: {
  name: string;
  focused: boolean;
}) => {
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
              fontSize: 12,
              fontFamily: "SandSemi",
              marginTop: actuatedNormalizeVertical(-5),
            }}
          >
            {name}
          </Text>
        </View>
      }
    >
      <LinearGradient
        colors={[
          focused ? "#81F495" : "#EFF4C3",
          focused ? "#81F495" : "#EFF4C3",
        ]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      ></LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
