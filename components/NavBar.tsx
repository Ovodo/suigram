import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import NotificationIcon from "../assets/icons/notification.svg";
import LogoIcon from "../assets/logos/logo_light.svg";
import LogoName from "../assets/logos/logo_name.svg";
import Logo from "../assets/logos/main-logo.svg";
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
    <View className='flex flex-row mb-2 pl-[1vw] pr-[2vw] justify-between items-end borde border-white'>
      <View className='flex flex-row items-end'>
        {/* <LogoIcon
          width={actuatedNormalize(24)}
          height={actuatedNormalizeVertical(24)}
        />
        <LogoName
          width={actuatedNormalize(85)}
          height={actuatedNormalizeVertical(41)}
        /> */}
        <Image
          className='scale-75 border border-white relative top-[7px]'
          source={require("@/assets/logos/main-logo.png")}
        />
      </View>
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
