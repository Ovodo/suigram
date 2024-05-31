import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "../Themed";
import { SCREEN_WIDTH, styles } from "@/style/stylesheet";
import Google from "../../assets/icons/google.svg";
import Arrow from "../../assets/icons/arr.svg";
import { router } from "expo-router";

const GetStarted = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => router.push("/home ")}
      className='w-[85vw] bg-app_green rounded-full px-[7vw] h-[9vh] flex flex-row justify-between items-center'
    >
      <View className='flex flex-row items-center'>
        <Google width={0.05 * SCREEN_WIDTH} height={0.05 * SCREEN_WIDTH} />
        <Text
          style={styles.text_md}
          className='text-app_dark relative top-[.2px] ml-[0.6vw]'
        >
          et Started
        </Text>
      </View>
      {/* <Image
        tintColor={"#112022"}
        source={require("../../assets/icons/arrow.png")}
      /> */}
      <Arrow width={24} height={24} />
    </TouchableOpacity>
  );
};

export default GetStarted;
