import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import NotificationIcon from "../assets/icons/Notification.svg";
import LogoIcon from "../assets/logos/logo_light.svg";
import LogoName from "../assets/logos/logo_name.svg";
import Logo from "../assets/logos/svg_logo.svg";
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from "@/style/stylesheet";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const navigation = useNavigation();

  const handleNavigate = (notification: any) => {
    navigation.navigate(notification as never);
  };

  return (
    <View className='flex flex-row mb-2 pl-[1vw] pr-[2vw] justify-between items-center borde border-white'>
      <Logo
        width={actuatedNormalize(131)}
        height={actuatedNormalizeVertical(46)}
      />

      {/* <Image
        style={{
          width: actuatedNormalize(131),
          height: actuatedNormalizeVertical(46),
        }}
        className=''
        source={require("@/assets/logos/dark.png")}
      /> */}
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
