import React, { ReactNode } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { notificationData } from "@/constants/data";
import { View as BgView, Text, useThemeColor } from "./Themed";
import Back from "@/assets/icons/back.svg";
import { actuatedNormalize } from "@/style/stylesheet";
import { router } from "expo-router";
import LikeIcon from "../assets/icons/like.svg";
import DislikeIcon from "../assets/icons/dislike.svg";
import GitfIcon from "../assets/icons/gift.svg";
import SendIcon from "../assets/icons/Send.svg";

interface NotificationProps {}

const Notification: React.FC<NotificationProps> = ({}) => {
  const action = useThemeColor("action");
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      gap: 14,
      paddingLeft: actuatedNormalize(5),
    },
    headerText: {
      fontSize: 18,
      fontFamily: "SandBold",
    },
    card: {
      display: "flex",
      position: "relative",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 15,
      height: 70,
      gap: actuatedNormalize(25),
    },
    profileImage: {
      width: actuatedNormalize(50),
      height: actuatedNormalize(50),
      borderRadius: 999,
      borderWidth: 0.5,
      borderColor: action,
    },
    message: {
      fontSize: 12,
      fontWeight: "500",
      fontFamily: "SandRegs",
    },
  });

  const notificationTypeIcon = (post: any): ReactNode => {
    switch (post.notification) {
      case "liked":
        return (
          <LikeIcon
            width={actuatedNormalize(20)}
            height={actuatedNormalize(20)}
          />
        );

        break;
      case "disliked":
        return (
          <DislikeIcon
            width={actuatedNormalize(20)}
            height={actuatedNormalize(20)}
          />
        );

        break;
      case "shared":
        return (
          <SendIcon
            width={actuatedNormalize(20)}
            height={actuatedNormalize(20)}
          />
        );

        break;
      case "gifted":
        return (
          <GitfIcon
            width={actuatedNormalize(20)}
            height={actuatedNormalize(20)}
          />
        );

        break;

      default:
        break;
    }
  };

  const notificationItem = (post: any): ReactNode => {
    return (
      <TouchableOpacity
        key={post.id}
        className='my-[0.7vh] '
        style={styles.card}
      >
        <Image
          source={require("../assets/images/post_1.png")}
          style={styles.profileImage}
        />
        <Text
          className='w-[55%]'
          style={styles.message}
        >{`Uche just ${post.notification} your meme.`}</Text>
        {notificationTypeIcon(post)}
      </TouchableOpacity>
    );
  };

  return (
    <BgView className='flex-1 pt-[3vh]' style={styles.container}>
      <View className='flex flex-row  items-center gap-2'>
        <TouchableOpacity activeOpacity={0.5} onPress={() => router.back()}>
          <Back width={actuatedNormalize(30)} height={actuatedNormalize(30)} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notification</Text>
      </View>
      <View className='px-[3vw]'>
        <Text className='mb-1 font-[SandBold]'>Today</Text>
        {notificationData.slice(6).map((post: any) => notificationItem(post))}
      </View>
      <View className='px-[3vw]'>
        <Text className='mb-1 font-[SandBold]'>Yesterday</Text>
        {notificationData
          .slice(4, 8)
          .map((post: any) => notificationItem(post))}
      </View>
      <View className='px-[3vw]'>
        <Text className='mb-1 font-[SandBold]'>Last 7 days</Text>
        {notificationData
          .slice(0, 4)
          .map((post: any) => notificationItem(post))}
      </View>
      <View className='px-[3vw]'>
        <Text className='mb-1 font-[SandBold]'>Last 30 days</Text>
        {notificationData.slice(6).map((post: any) => notificationItem(post))}
      </View>
    </BgView>
  );
};

export default Notification;
