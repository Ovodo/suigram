import React from "react";
import { FlatList, View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SocialMediaCard from "@/components/SocialMediaCard";
import NavBar from "@/components/NavBar";
import { postingData, storyData } from "@/constants/data";
import StoryCard from "@/components/StoryCard";

const Main = () => {
  const handlePress = () => {
    // Handle press action
  };

  return (
    <SafeAreaProvider>
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

        <View>
          {postingData.map((post, index) => (
            <SocialMediaCard
              key={index.toString()}
              username={"John Doe"}
              imageProfile={post.imageProfile}
              imagePost={post.imagePost}
              react="70"
              share="800"
              like="70"
              unlike="1"
              onPress={handlePress}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 18,
  },
  story: {
    marginHorizontal: 20,
  },
});

export default Main;
