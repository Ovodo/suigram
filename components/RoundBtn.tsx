import React, { useEffect, useRef } from "react";
import { Text, View } from "@/components/Themed";
import { Image, TouchableOpacity } from "react-native";
import { Animated as Animate } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from "react-native-reanimated";
import Svd, { G, Circle, Svg } from "react-native-svg";
import { SCREEN_WIDTH } from "@/style/stylesheet";

const RoundBtn = ({
  percentage,
  press,
  scrollTo,
}: {
  percentage: any;
  press: React.Dispatch<React.SetStateAction<number>>;
  scrollTo: any;
}) => {
  const size = 0.24 * SCREEN_WIDTH;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const scale = useSharedValue<number>(0.9);
  const opacity = useSharedValue<number>(0.75);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));
  const progressAnimation = useRef(new Animate.Value(0)).current;
  const progressRef = useRef<Circle>(null);
  const animaton = (toValue: any) => {
    return Animate.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    scale.value = withRepeat(withTiming(1, { duration: 500 }), -1, true);
    opacity.value = withRepeat(withTiming(1, { duration: 500 }), -1, true);
  }, []);
  useEffect(() => {
    animaton(percentage);
  }, [percentage]);
  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;
      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, [percentage]);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      //   style={styles.btn}
      onPress={scrollTo}
      className='w-[64px] h-[64px]  bg-transparent relative  border-app_green flex items-center justify-center  rounded-full'
    >
      <Animated.View
        style={animatedStyles}
        className='w-[15vw] h-[15vw] absolute  animate-pulse flex items-center justify-center bg-app_green rounded-full'
      >
        {/* <Text className='text-app_dark text-2xl'> &rarr;</Text> */}
        <Image
          tintColor={"#112022"}
          // className='w-[7vw] h-[7vw]'
          source={require("../assets/icons/arrow.png")}
        />
      </Animated.View>
      <Svg width={size} height={size}>
        <G rotation={"-90"} origin={center}>
          <Circle
            fill={"transparent"}
            stroke={"gray"}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            fill={"transparent"}
            stroke={"#81F495"}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            // strokeDashoffset={circumference - circumference * 0.25}
          />
        </G>
      </Svg>
    </TouchableOpacity>
  );
};

export default RoundBtn;
