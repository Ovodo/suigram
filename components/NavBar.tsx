import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const navigation = useNavigation();
  
  const handleNavigate = (notification: any) => {
    navigation.navigate(notification as never);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logos/logo.svg")} style={styles.Logo} />
      <TouchableOpacity onPress={() => handleNavigate("notification")}>
        <Image
          source={require("../assets/icons/Notification.svg")}
          style={styles.Icons}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  Logo: {
    width: 90,
    height: 30,
  },
  Icons: {
    width: 30,
    height: 30,
  },
});

export default NavBar;
