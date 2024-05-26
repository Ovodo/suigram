import { LinearGradient } from "expo-linear-gradient";
import React from "react";
// import { Text, View } from "@/components/Themed";
import { ImageBackground, Text, View } from "react-native";

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className='relative items-center flex-1'>
      <ImageBackground
        // style={{resizeMode:"cover"}}
        className='w-full bg-cover  h-full'
        source={require("../assets/images/bg_large.png")}
      >
        {/* <LinearGradient
        // Background Linear Gradient
        colors={["#9D1AFE", "#BA2FFE", "#E750FF", "#FFFFFF"]}
        locations={[0, 0.25, 0.5, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className='flex-1 relative flex-col justify-center items-center '
        > */}
        {children}
        {/* </LinearGradient> */}
      </ImageBackground>
    </View>
  );
};

export default Background;
