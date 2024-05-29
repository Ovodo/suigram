import { actuatedNormalize } from "@/style/stylesheet";
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

interface StoryCardProps {
  username: string;
  imageProfile: any;
  onPress: () => void;
}

const StoryCard: React.FC<StoryCardProps> = ({
  username,
  imageProfile,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={imageProfile} alt={username} style={styles.profileImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    marginVertical: 5,
    marginHorizontal: 7,
  },
  profileImage: {
    width: actuatedNormalize(90),
    height: actuatedNormalize(90),
    borderRadius: actuatedNormalize(30),
    borderWidth: 0.5,
    borderStyle: "dashed",
    borderColor: "#81F495",
  },
});

export default StoryCard;
