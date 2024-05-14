import React from "react";
import { FlatList, View, Animated } from "react-native";
import { useState, useRef } from "react";
import Background from "@/components/Background";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import RoundBtn from "@/components/RoundBtn";
import { onBoardingData } from "@/constants/data";
import OnBoardingItem from "@/components/OnBoardingItem";
import Paginator from "@/components/Paginator";

const Main = () => {
  const [currenIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any }) => {
      setCurrentIndex(viewableItems[0].index);
    }
  ).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slideRef = useRef(null);
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          <Background>
            <View className="w-full  absolute top-[5%] h-[79%] ">
              <FlatList
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                horizontal
                renderItem={({ item }) => <OnBoardingItem item={item} />}
                data={onBoardingData}
                keyExtractor={(item) => item.id.toString()}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  { useNativeDriver: false }
                )}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                scrollEventThrottle={32}
                ref={slideRef}
              />
            </View>
            <Paginator scrollX={scrollX} data={onBoardingData} />
            <View className="absolute bottom-[8%]">
              <RoundBtn />
            </View>
          </Background>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Main;
