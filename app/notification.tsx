import React from "react";
import { FlatList, View, Animated, ScrollView, StyleSheet } from "react-native";
import { useState, useRef } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SocialMediaCard from "@/components/SocialMediaCard";
import NavBar from "@/components/NavBar";
import { postingData } from "@/constants/data";
import Notification from "@/components/Notification";
import { useThemeColor } from "@/components/Themed";

const NotificationPage = () => {
  const bg = useThemeColor("background");
  const styles = StyleSheet.create({
    container: {
      // paddingBottom: 40,
      backgroundColor: bg,
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1'>
        <ScrollView style={styles.container}>
          <Notification />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default NotificationPage;
