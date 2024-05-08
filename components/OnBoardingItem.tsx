import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { Text } from "./Themed";
import { styles } from "@/style/style";

type OnBoard = {
  image: ImageSourcePropType;
  title: string;
  desc: string;
};

const OnBoardingItem = ({ item }: { item: OnBoard }) => {
  return (
    <View className=' w-screen flex justify-between items-center'>
      <Image source={item.image} />
      <View className='flex w-screen mb-[10%]  gap-[10%] items-center'>
        <Text style={styles.title}>{item.title}</Text>
        <Text className='w-[90%] text-center' style={styles.desc}>
          {item.desc}
        </Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;
