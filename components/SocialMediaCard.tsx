import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

interface SocialMediaCardProps {
  username: string;
  imageProfile: string;
  imagePost: string;
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
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.header}>
          <Image source={{ uri: imageProfile }} style={styles.profileImage} />
          <Text style={styles.username}>{username}</Text>
        </View>
        <Image source={{ uri: imagePost }} style={styles.postImage} />
      </TouchableOpacity>
      <View style={styles.postButtons}>
        <View style={styles.postButton}>
          <View style={styles.eachPostButton}>
            <Image
              source={require("../assets/icons/heart.svg")}
              style={styles.Icons}
            />
            <Text style={styles.count}>{react}</Text>
          </View>
          <View style={styles.eachPostButton}>
            <Image
              source={require("../assets/icons/Send.svg")}
              style={styles.Icons}
            />
            <Text style={styles.count}>{share}</Text>
          </View>
        </View>
        <View style={styles.postButton}>
          <View style={styles.eachPostButton}>
            <Image
              source={require("../assets/icons/like.svg")}
              style={styles.Icons}
            />
            <Text style={styles.count}>{like}</Text>
          </View>
          <View style={styles.eachPostButton}>
            <Image
              source={require("../assets/icons/dislike.svg")}
              style={styles.Icons}
            />
            <Text style={styles.count}>{unlike}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container flex 1 to take up the entire screen
    backgroundColor: "#ffffff",
    borderRadius: 30,
    paddingTop: 20,
    margin: 15,
    marginTop: 20,
    overflow: "visible",
    marginVertical: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 20,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
  },
  postImage: {
    width: "auto",
    height: 300,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 13,
  },
  count: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Quicksand"
  },
  postButtons: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: -20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  postButton: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  eachPostButton: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  Icons: {
    width: 24,
    height: 24,
  },
});

export default SocialMediaCard;
