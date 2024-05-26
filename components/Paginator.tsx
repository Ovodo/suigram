import { SCREEN_WIDTH } from "@/style/stylesheet";
import React from "react";
import { StyleSheet, View, Animated, useWindowDimensions } from "react-native";

const Paginator = ({
  data,
  scrollX,
}: {
  data: any[];
  scrollX: Animated.Value;
}) => {
  const { width } = useWindowDimensions();
  return (
    <View className='flex flex-row self-center  absolute bottom-[34%] h-[64]'>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 0.13 * SCREEN_WIDTH, 8],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={{ width: dotWidth, opacity }}
            className='h-[8px] rounded-[5px] bg-app_green mx-[4px]'
            key={i.toString()}
          ></Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Paginator;
