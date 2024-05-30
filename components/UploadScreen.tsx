import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import UploadEm from "../assets/images/troll.svg";
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from "@/style/stylesheet";
import { Text, useThemeColor } from "./Themed";
import DismissKeyboard from "./Dismiss";

interface UploadScreenProps {}

const UploadScreen: React.FC<UploadScreenProps> = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const navigation = useNavigation();
  const [image, setImage] = useState<string | null>(null);
  const action = useThemeColor("action");
  const invert = useThemeColor("background");
  const text = useThemeColor("text");

  useLayoutEffect(() => {
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

  const handleTitleChange = (text: string) => {
    if (text.length < 40) {
      setTitle(text);
    }
  };
  const handleTagsChange = (text: string) => {};

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled={!false}
        style={styles.container}
      >
        <ScrollView className='' style={styles.container}>
          <View
            className='relative  h-screen flex justify-start'
            style={[
              styles.container,
              {
                marginHorizontal: actuatedNormalize(20),
                paddingTop: actuatedNormalizeVertical(20),
              },
            ]}
          >
            <TouchableOpacity
              className='absolute right-0 top-4'
              onPress={() => router.back()}
              style={styles.header}
            >
              {/* <TouchableOpacity> */}
              <Text style={styles.headerText}>Cancel</Text>
              {/* </TouchableOpacity> */}
            </TouchableOpacity>

            <View className='self-center mt-[12%]'>
              <TouchableOpacity
                onPress={pickImage}
                style={{ borderColor: text }}
                className='flex border-[.5px] w-full border-dashed  p-1 rounded-md'
              >
                <Image
                  source={
                    image
                      ? { uri: image }
                      : require("@/assets/images/troll.png")
                  }
                  // source={require("@/assets/images/troll.png")}
                  className='w-[85vw] h-[176px]   rounded-md'
                />
              </TouchableOpacity>
            </View>

            <View className='mt-[20%]'>
              <Text className='font-[SandSemi]' style={styles.inputHeader}>
                Title:
              </Text>
              <View className='flex flex-row w-full relative justify-between'>
                <TextInput
                  placeholder='Write a caption'
                  placeholderTextColor={text}
                  value={title}
                  className='flex-1 capitalize'
                  onChangeText={handleTitleChange}
                  maxLength={100}
                  style={[
                    styles.textInput,
                    { borderBottomColor: text, color: text },
                  ]}
                />
              </View>
              <View
                style={{ borderColor: text }}
                className='w-[12vw] absolute flex items-center justify-center right-2 bottom-[25%] self-center h-[12vw] border-[0.2px] rounded-full'
              >
                <Text className='font-[SandSemi] text-[12px] opacity-80'>{`${title.length}/40`}</Text>
              </View>
            </View>

            <View>
              <Text style={styles.inputHeader}>Categories / hashtags:</Text>
              <TextInput
                placeholder='Add categories or hashtags'
                // value={textInputValue}
                onChangeText={handleInputChange}
                maxLength={100}
                style={styles.textInput}
              />
            </View>

            <TouchableOpacity
              onPress={handlePost}
              style={{
                backgroundColor: action,
                height: actuatedNormalizeVertical(45),
              }}
              className='absolute bottom-1 w-[100%] self-center flex justify-center rounded-md'
            >
              <Text
                style={{ color: invert }}
                className='text-center font-[SandSemi]'
              >
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  headerText: {
    fontSize: actuatedNormalize(14),
    fontFamily: "SandSemi",
    color: "#EFF4C3",
  },
  inputHeader: {
    marginBottom: 10,
  },
  textInput: {
    paddingVertical: 8,
    paddingBottom: actuatedNormalizeVertical(20),
    borderBottomWidth: 0.5,
    fontFamily: "SandRegs",
    // placeholderTextColor: "#EFF4C3",
  },
});

export default UploadScreen;
