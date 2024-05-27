import React from "react";
import { FlatList, View, Animated, ScrollView, StyleSheet } from "react-native";
import { useState, useRef } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SocialMediaCard from "@/components/SocialMediaCard";
import NavBar from "@/components/NavBar";
import { postingData } from "@/constants/data";
import Notification from "@/components/Notification";

const NotificationPage = () => {

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <NavBar />
        <Notification />
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "relative",
    paddingBottom: 40,
  },
});

export default NotificationPage;
