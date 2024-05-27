import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import LikeIcon from "../assets/icons/like.svg";
import DislikeIcon from "../assets/icons/dislike.svg";
import GitfIcon from "../assets/icons/gift.svg";
import SendIcon from "../assets/icons/Send.svg";
import { LinearGradient } from "expo-linear-gradient";

interface SocialMediaCardProps {
  username: string;
  imageProfile: any;
  imagePost: any;
  react: string;
  share: string;
  like: string;
  unlike: string;
  onPress: () => void;
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
}) => {
  return (
    <LinearGradient
      colors={["#14213D", "#FFFFFC", "#000000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBorder}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity onPress={onPress}>
            <View className='flex flex-row w-full gap-3 pl-4 pt-4 z-[50] justify-start items-center'>
              <Image
                // source={imageProfile}
                alt={username}
                className='bg-[#D9D9D9] w-[35px] h-[35px] px-1 rounded-full'
              />
              <Text className='bg-[#14213D] text-[#FFFFFF] px-2 rounded-full text-[16px] font-[700] font-[Quicksand]'>{username}</Text>
            </View>
            <Image source={imagePost} style={styles.postImage} />
          </TouchableOpacity>
        </View>
        <View className="bg-black p-4">
          <Text
            className='text-[#EFF4C3] text-[20px] font-[700] font-[Quicksand]'
          >
            PEPE!! Man On the Moon...
          </Text>
          <View className="flex flex-row w-full gap-3 justify-center items-end">
            <Text className="w-[50%] text-[#EFF4C3]">
              #funny #crypto #memecoins #crying #hardlife #invicible
            </Text>
            <View className="flex flex-row w-[45%] gap-3 justify-center items-center">
              <View className="flex flex-row text-[15px] gap-1 justify-center items-center">
                <LikeIcon style={styles.Icons} />
                <Text style={styles.count}>{like}</Text>
              </View>
              <View className="flex flex-row text-[15px] gap-1 justify-center items-center">
                <DislikeIcon style={styles.Icons} />
                <Text style={styles.count}>{unlike}</Text>
              </View>
              <View className="flex flex-row text-[15px] gap-1 justify-center items-center">
                <GitfIcon style={styles.Icons} />
                <Text style={styles.count}>{react}</Text>
              </View>
              <View className="flex flex-row text-[15px] gap-1 justify-center items-center">
                <SendIcon style={styles.Icons} />
                <Text style={styles.count}>{share}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 30,
    marginBottom: 30,
    margin: 15,
    padding: 2,
  },
  container: {
    backgroundColor: "black",
    overflow: "hidden",
    borderRadius: 28,
    height: 450,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  card: {
    backgroundColor: "black",
    overflow: "hidden",
    height: 350,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  postImage: {
    display: "flex",
    position: "absolute",
    width: "100%",
    height: 500,
  },
  count: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Quicksand",
    color: "#EFF4C3",
  },
  Icons: {
    width: 24,
    height: 24,
  },
});

export default SocialMediaCard;
