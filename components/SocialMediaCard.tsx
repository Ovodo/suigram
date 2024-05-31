import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { View as BgView, Text } from "./Themed";

import LikeIcon from "../assets/icons/like.svg";
import DislikeIcon from "../assets/icons/dislike.svg";
import GitfIcon from "../assets/icons/gift.svg";
import SendIcon from "../assets/icons/Send.svg";
import { LinearGradient } from "expo-linear-gradient";
import { actuatedNormalize } from "@/style/stylesheet";

interface SocialMediaCardProps {
  username: string;
  imageProfile: any;
  imagePost: any;
  react: string;
  share: string;
  like: string;
  unlike: string;
  onPress: () => void;
  tags: string[];
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({
  username,
  imageProfile,
  imagePost,
  react,
  share,
  like,
  unlike,
  onPress,
  tags,
}) => {
  return (
    <LinearGradient
      className='w-[98vw]'
      colors={["#14213D", "#FFFFFC", "#000000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBorder}
    >
      <BgView className='h-[45vh] w-full' style={styles.container}>
        <View className='h-[72.5%] ' style={styles.card}>
          <View className='flex flex-row w-full gap-3 pl-4 py-2  z-[50] justify-start items-center'>
            <Image
              // source={imageProfile}
              alt={username}
              width={actuatedNormalize(35)}
              height={actuatedNormalize(35)}
              className='bg-app_dark  px-1 rounded-full'
            />
            <Text className='bg-[#14213D] text-[#FFFFFF] px-3 py-1 rounded-full text-[12px] font-[KufiMed]'>
              {username}
            </Text>
          </View>
          <Image
            source={imagePost}
            className='object-cover  w-full h-[70%]'
            style={styles.postImage}
          />
        </View>
        <View className='px-[3vw]  flex-1 py-[1vh] justify-between'>
          <Text className='text-[18px]  font-[SandBold]'>
            PEPE!! Man On the Moon...
          </Text>
          <View className='flex flex-row w-full gap-3 justify-between items-end'>
            <View className='w-[50%]  flex flex-row flex-wrap gap-[2px]  font-[SandSemi] '>
              {tags.map((tag, i) => (
                <Text key={i.toString()} className='text-[12px]'>
                  {tag}
                </Text>
              ))}
            </View>
            <View className='flex flex-row w-[50%] gap-[10vw] pr-[2vw]  justify-center items-center'>
              <TouchableOpacity activeOpacity={0.3}>
                <TouchableOpacity activeOpacity={0.3}></TouchableOpacity>
                <View className='flex flex-row text-[15px] gap-1 justify-center items-center'>
                  <LikeIcon
                    width={actuatedNormalize(20)}
                    height={actuatedNormalize(20)}
                    style={styles.Icons}
                  />
                  <Text style={styles.count}>{like}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.3}>
                <View className='flex flex-row text-[15px] gap-1 justify-center items-center'>
                  <DislikeIcon
                    width={actuatedNormalize(20)}
                    height={actuatedNormalize(20)}
                    style={styles.Icons}
                  />
                  <Text style={styles.count}>{unlike}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.3}>
                <View className='flex flex-row text-[15px] gap-1 justify-center items-center'>
                  <GitfIcon
                    width={actuatedNormalize(20)}
                    height={actuatedNormalize(20)}
                    style={styles.Icons}
                  />
                  <Text style={styles.count}>{react}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.3}>
                <View className='flex flex-row text-[15px] gap-1 justify-center items-center'>
                  <SendIcon
                    width={actuatedNormalize(20)}
                    height={actuatedNormalize(20)}
                    style={styles.Icons}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BgView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: actuatedNormalize(30),
    marginBottom: 10,
    margin: 15,
    padding: 1,
  },
  container: {
    borderRadius: actuatedNormalize(30),
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 3,
  },
  card: {
    backgroundColor: "black",
    borderTopLeftRadius: actuatedNormalize(30),
    borderTopRightRadius: actuatedNormalize(30),
    // overflow: "hidden",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 3,
  },
  postImage: {
    // display: "flex",
  },
  count: {
    fontSize: actuatedNormalize(10),
    fontWeight: "500",
    fontFamily: "KufiMed",
    color: "white",
  },
  Icons: {},
});

export default SocialMediaCard;
