import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import UploadEm from "../assets/images/troll.svg";

interface UploadScreenProps {}

const UploadScreen: React.FC<UploadScreenProps> = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const [categoriesInputValue, setCategoriesInputValue] = useState("");
  const navigation = useNavigation();
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    pickImage();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Handle the post
  const handlePost = async () => {
    if (image) {
      try {
        const response = await fetch(
          "https://suigram-image-uploader.onrender.com/api/upload-img",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              imageUrl: image,
            }),
          }
        );

        const responseData = await response.json();
        console.log(responseData);
        if (response.ok) {
          console.log("Post successful:", responseData);
        } else {
          console.error("Error posting:", responseData);
        }
      } catch (error) {
        console.error("Error posting:", error);
      }
    } else {
      console.log("No image selected");
    }
  };

  const handleInputChange = (text: string) => {
    if (text.length <= 100) {
      setTextInputValue(text);
    }
  };

  const handleCategoriesChange = (text: string) => {
    if (text.length <= 100) {
      setCategoriesInputValue(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => router.back()}>
          <Text style={styles.headerText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="flex flex-col gap-24">
        <View>
          <TouchableOpacity
            onPress={pickImage}
            className="flex border-2 border-dashed border-[#EFF4C3] p-1 rounded-md"
          >
            {image ? (
              <Image
                source={{ uri: image }}
                className="w-full h-[200px] rounded-md"
              />
            ) : (
              <UploadEm />
            )}
          </TouchableOpacity>
        </View>

        <View className="mt-12">
          <Text style={styles.inputHeader}>Title:</Text>
          <TextInput
            placeholder="Write a caption"
            value={textInputValue}
            onChangeText={handleInputChange}
            maxLength={100}
            style={styles.textInput}
          />
        </View>

        <View>
          <Text style={styles.inputHeader}>Categories / hashtags:</Text>
          <TextInput
            placeholder="Add categories or hashtags"
            value={categoriesInputValue}
            onChangeText={handleCategoriesChange}
            maxLength={100}
            style={styles.textInput}
          />
        </View>

        <TouchableOpacity
          onPress={handlePost}
          className="mt-12 py-4 bg-[#EFF4C3] rounded-md"
        >
          <Text className="text-xl text-center font-bold">Post</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Plus Jakarta Sans",
    color: "#EFF4C3",
  },
  inputHeader: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Plus Jakarta Sans",
    color: "#EFF4C3",
    marginBottom: 10,
  },
  textInput: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#EFF4C3",
    // placeholderTextColor: "#EFF4C3",
  },
});

export default UploadScreen;
