import React, { useEffect } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "../Themed";
import { SCREEN_WIDTH, styles } from "@/style/stylesheet";
import Google from "../../assets/icons/google.svg";
import Arrow from "../../assets/icons/arr.svg";
import * as WebBrowser from "expo-web-browser";
import {
  makeRedirectUri,
  useAuthRequest,
  ResponseType,
} from "expo-auth-session";
const discovery = {
  authorizationEndpoint: "suigram://",
};

const GetStarted = () => {
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId:
        "39748502508-e55qmc98brq5r523csnn1eq2ssduabsm.apps.googleusercontent.com",
      scopes: ["user-read-email", "playlist-modify-public"],
      redirectUri: makeRedirectUri({
        scheme: "suigram",
      }),
    },
    discovery
  );

  useEffect(() => {
    if (response && response.type === "success") {
      const token = response.params.access_token;
      console.log(token);
    }
  }, [response]);
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={!request}
      onPress={() => promptAsync()}
      className='w-[85vw] bg-app_green rounded-full px-[7vw] h-[9vh] flex flex-row justify-between items-center'
    >
      <View className='flex flex-row items-center'>
        <Google width={0.05 * SCREEN_WIDTH} height={0.05 * SCREEN_WIDTH} />
        <Text
          style={styles.text_md}
          className='text-app_dark relative top-[.2px] ml-[0.6vw]'
        >
          et Started
        </Text>
      </View>
      {/* <Image
        tintColor={"#112022"}
        source={require("../../assets/icons/arrow.png")}
      /> */}
      <Arrow width={24} height={24} />
    </TouchableOpacity>
  );
};

export default GetStarted;
