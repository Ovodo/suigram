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
    width: 54,
    height: 54,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#A01CFE",
  },
});

export default StoryCard;
