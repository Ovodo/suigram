import React, { useEffect } from "react";
import { Text, View } from "@/components/Themed";
import { Image, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from "react-native-reanimated";
import { router } from "expo-router";

const RoundBtn = ({ press }: { press?: any }) => {
  const scale = useSharedValue<number>(0.9);
  const opacity = useSharedValue<number>(0.75);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    scale.value = withRepeat(withTiming(1, { duration: 500 }), -1, true);
    opacity.value = withRepeat(withTiming(1, { duration: 500 }), -1, true);
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      //   style={styles.btn}
      onPress={() => router.push("/home")}
      className='w-[64px] h-[64px] border-2 bg-transparent border-[#A01CFE] flex items-center justify-center  rounded-full'
    >
      <Animated.View
        style={animatedStyles}
        className='w-[56px] h-[56px] animate-pulse flex items-center justify-center bg-[#A01CFE] rounded-full'
      >
        {/* <Text> &rarr;</Text> */}
        <Image source={require("../assets/icons/arrow.png")} />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default RoundBtn;
