import { transform } from "@babel/core";
import React, { useState } from "react";
import { View, StyleSheet, Pressable, LayoutChangeEvent } from "react-native";
import Animated, {
  withTiming,
  useSharedValue,
  runOnJS,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Text, useThemeColor } from "./Themed";

export type TabButtonType = {
  title: string;
};

type TabButtonsProps = {
  buttons: TabButtonType[];
  selectedTab: number;
  setSelectedTab: (index: number) => void;
};

const TabButtons = ({
  buttons,
  selectedTab,
  setSelectedTab,
}: TabButtonsProps) => {
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });
  const text = useThemeColor("text");

  const buttonWidth = dimensions.width / buttons.length;

  const tabPositionX = useSharedValue(0);

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const handlePress = (index: number) => {
    setSelectedTab(index);
  };

  const onTabPress = (index: number) => {
    tabPositionX.value = withTiming(buttonWidth * index, {}, () => {
      runOnJS(handlePress)(index);
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  {
    /* <Animated.View
    style={[
      animatedStyle,
      {
        position: "absolute",
        backgroundColor: "#fff",
        borderRadius: 15,
        marginHorizontal: 5,
        height: dimensions.height - 10,
        width: buttonWidth - 10,
      },
    ]}
  /> */
  }
  return (
    <View
      className=' flex flex-row mb-2 justify-center'
      onLayout={onTabbarLayout}
      // style={styles.tabBtnCont1}
    >
      {buttons.map((button, index) => {
        const opacity = selectedTab === index ? 1 : 0.5;
        const show = selectedTab === index;
        return (
          <Pressable
            key={index}
            onPress={() => onTabPress(index)}
            style={styles.tabBtn}
          >
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "600",
                fontSize: 15,
                opacity,
              }}
            >
              {button.title}
            </Text>
            {show && (
              <View
                style={{ backgroundColor: text }}
                className='w-[5w] h-[2px] mt-[2px] rounded-full'
              />
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabButtons;

const styles = StyleSheet.create({
  tabBtnCont: {
    backgroundColor: "#c33cc",
    borderRadius: 200,
    justifyContent: "center",
  },

  tabBtnCont1: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },

  tabBtn: {
    // borderWidth: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
