import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import TabScreen from "@/components/TabScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, useThemeColor } from "@/components/Themed";
import { userData } from "@/constants/data";
import { SCREEN_WIDTH, actuatedNormalize } from "@/style/stylesheet";
import Edit from "@/assets/icons/edit.svg";
import Sui from "@/assets/icons/sui.svg";

const ProfileScreen = () => {
  const bg = useThemeColor("background");
  const text = useThemeColor("text");
  const action = useThemeColor("action");
  const gap = 12;
  const itemPerRow = 3;
  const totalGapSize = (itemPerRow - 1) * gap;
  const childWidth = (SCREEN_WIDTH * 0.6 - totalGapSize) / itemPerRow;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bg,
      // marginTop: 40,
    },

    userProfileOneContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    userProfileContainer: {},

    userNameContainer: {
      width: actuatedNormalize(90),
      height: actuatedNormalize(90),
      borderColor: action,
      borderWidth: 1,
    },

    userImg: {
      height: 83,
      width: 83,
      borderRadius: 80,
      borderWidth: 4,
      borderColor: "#A01CFE",
    },

    userName: {
      fontSize: 18,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      letterSpacing: -0.40799999237060547,
      lineHeight: 22,
    },

    aboutUser: {
      fontSize: 13,
      fontWeight: "600",
      color: "#666",
      textAlign: "center",
      marginBottom: 10,
      borderWidth: 4,
      borderColor: "transparent",
      padding: 5,
      lineHeight: 20,
      paddingLeft: 30,
      paddingRight: 30,
    },

    userBtnWrapper: {
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      marginBottom: 10,
      display: "flex",
    },

    userBtn: {
      borderColor: "#A01CFE",
      backgroundColor: "#A01CFE",
      color: "white",
      borderWidth: 2,
      borderRadius: 30,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 5,
      width: 120,
      height: 40,
      gap: 10,
    },

    userBtnTxt: {
      color: "white",
      textAlign: "center",
      fontSize: 13,
      lineHeight: 16.25,
    },

    userInfoWrapperContainer: {
      paddingTop: 3,
      paddingBottom: 5,
    },

    userInfoWrapper: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "5%",
    },

    userInfoItem: {
      justifyContent: "center",
      borderColor: "#F6EFFB",
      borderStyle: "solid",
      borderWidth: 1,
      padding: 8,
      borderRadius: 10,
      width: 85,
      margin: 2,
    },

    userInfoTitle: {
      fontSize: 12,
      // fontWeight: "bold",
      textAlign: "center",
    },

    userInfoSubTitle: {
      fontSize: 10.2,
      color: "#666",
      textAlign: "center",
    },
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        > */}
        <View className='flex px-[2vw] mt-[1vh] flex-row justify-between'>
          <View className='flex flex-row  items-center'>
            <Text className='text-lg mr-[2vw] font-[SandBold]'>0x...e52</Text>
            <Edit
              width={actuatedNormalize(12)}
              height={actuatedNormalize(12)}
            />
          </View>
          <View className='flex flex-row  items-center'>
            <Text className='text-lg font-[SandBold]'>12</Text>
            <Sui width={actuatedNormalize(18)} height={actuatedNormalize(18)} />
          </View>
        </View>
        <View
          className='h-[25vh] mt-[4vh] flex flex-row items-center'
          style={styles.userProfileOneContainer}
        >
          <View
            className='rounded-full overflow-hidden  ml-[2vw] flex justify-center items-center'
            style={styles.userNameContainer}
          >
            <Image
              style={{
                resizeMode: "cover",
              }}
              className='flex-1 rounded-full'
              source={require("@/assets/images/drake.png")}
            />
          </View>
          <View
            style={
              {
                // gap: actuatedNormalize(15),
              }
            }
            className='flex w-[70%] pr-[2vw] h-full flex-wrap flex-row '
          >
            {userData.map((item: any, index: number) => (
              <View
                key={index.toString()}
                style={[
                  { borderColor: text },
                  // {
                  //   marginHorizontal: gap / 2,
                  //   minWidth: childWidth,
                  //   maxWidth: childWidth,
                  // },
                ]}
                className='flex w-[19vw] h-[19vw] my-auto mx-auto mb-[2vh] justify-center items-center  rounded-md border-[.5px]'
              >
                <Text className='text-[SandBold] text-[18px]'>
                  {item.numbers}
                </Text>
                <Text className='text-[SanMed] opacity-70 text-[10px]'>
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View className='flex-1'>
          <TabScreen />
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ProfileScreen;
