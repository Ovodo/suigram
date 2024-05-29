import React from "react";
import { FlatList, View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SocialMediaCard from "@/components/SocialMediaCard";
import NavBar from "@/components/NavBar";
import { postingData, storyData } from "@/constants/data";
import StoryCard from "@/components/StoryCard";
import { useThemeColor } from "@/components/Themed";

const Main = () => {
  const handlePress = () => {
    // Handle press action
  };
  const bg = useThemeColor("background");
  const styles = StyleSheet.create({
    container: {
      paddingBottom: 18,
      backgroundColor: bg,
    },
    story: {
      // backgroundColor: "red",
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1'>
        <ScrollView style={styles.container}>
          <NavBar />
          <FlatList
            data={storyData}
            style={styles.story}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <StoryCard
                onPress={handlePress}
                username={""}
                imageProfile={item.imageURL}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

          <View className='flex items-center'>
            {postingData.map((post, index) => (
              <SocialMediaCard
                key={index.toString()}
                username={"John Doe"}
                imageProfile={post.imageProfile}
                imagePost={post.imagePost}
                tags={post.tags}
                react='70'
                share='800'
                like='70'
                unlike='1'
                onPress={handlePress}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Main;
