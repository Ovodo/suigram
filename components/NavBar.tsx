import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import NotificationIcon from "../assets/icons/notification.svg";
import LogoIcon from "../assets/logos/logo.svg";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const navigation = useNavigation();

  const handleNavigate = (notification: any) => {
    navigation.navigate(notification as never);
  };

  return (
    <View className="flex flex-row pt-[5vh] pb-8 px-5 justify-between items-center">
      <LogoIcon />
      <TouchableOpacity onPress={() => handleNavigate("notification")}>
        <NotificationIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});

export default NavBar;
