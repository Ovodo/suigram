import { FlatList, StyleSheet, View, Animated, Platform } from "react-native";
import { useState, useRef } from "react";
import { styles } from "@/style/style";
import { LinearGradient } from "expo-linear-gradient";
import Background from "@/components/Background";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/Themed";
import RoundBtn from "@/components/action/RoundBtn";
import { onBoardingData } from "@/constants/data";
import OnBoardingItem from "@/components/OnBoardingItem";
import Paginator from "@/components/Paginator";
import { StatusBar } from "expo-status-bar";
import GetStarted from "@/components/action/GetStarted";

const Main = () => {
  const [currenIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any }) => {
      setCurrentIndex(viewableItems[0].index);
    }
  ).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slideRef = useRef<FlatList>(null);

  const scrollTo = () => {
    if (currenIndex < onBoardingData.length - 1) {
      if (slideRef.current) {
        slideRef.current.scrollToIndex({ index: currenIndex + 1 });
      }
    } else {
      console.log("last item");
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1'>
        <View className='flex-1'>
          <Background>
            <View className='w-full absolute top-[5%] h-[79%] '>
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
            <View className='absolute self-center bottom-[5%]'>
              {currenIndex < 3 ? (
                <RoundBtn
                  scrollTo={scrollTo}
                  percentage={(currenIndex + 1) * (100 / onBoardingData.length)}
                />
              ) : (
                <GetStarted />
              )}
            </View>
          </Background>
          <StatusBar
            backgroundColor='#112022'
            style={Platform.OS === "ios" ? "light" : "auto"}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Main;
