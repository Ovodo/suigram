import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { notificationData } from "@/constants/data";

interface NotificationProps {}

const Notification: React.FC<NotificationProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Notification</Text>
      {notificationData.map((post: any) => (
        <View key={post.id} style={styles.card}>
          <Image
            source={require("../assets/images/post_1.png")}
            style={styles.profileImage}
          />
          <Text style={styles.message}>Uche just liked your meme.</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginHorizontal: 20,
    gap: 14,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Quicksand"
  },
  card: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
    height: 70,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    gap: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#A01CFE",
  },
  message: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Quicksand",
  },
});

export default Notification;
