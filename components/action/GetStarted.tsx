import React, { useEffect } from "react";
import {
  Image,
  NativeModules,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "../Themed";
import { SCREEN_WIDTH, styles } from "@/style/stylesheet";
import Google from "../../assets/icons/google.svg";
import Arrow from "../../assets/icons/arr.svg";
import * as WebBrowser from "expo-web-browser";
import axios from "axios";
import { jwtToAddress } from "@mysten/zklogin";

import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { jwtDecode } from "jwt-decode";

const discovery = {
  authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
};

WebBrowser.maybeCompleteAuthSession();

const GetStarted = () => {
  const { Print } = NativeModules;

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const res = await GoogleSignin.signIn({});
      // const jwtPayload = jwtDecode(res.idToken as string);
      const address = jwtToAddress(res.idToken as string, BigInt("123"));
      console.log(address);
    } catch (error: any) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          console.error("User Sign In is required");
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.error("Google Play Services are needed");
          break;
      }
      // console.log("Error", error.code);
    }
  };
  const urlParamsBase: Record<string, string> = {
    // nonce: "",
    redirect_uri: "suigram://",
    response_type: "id_token",
    scope: "openid",
  };

  const urlParams = new URLSearchParams(urlParamsBase);

  const req = async () => {
    Print.getHelloWorld().then((res: any) => console.log(res));
  };

  return (
    <TouchableOpacity
      //   activeOpacity={0.6}
      // disabled={!request}
      onPress={() => {
        // console.log(response);
        // promptAsync();
        // signIn();
        req();
      }}
      className={`w-[85vw] bg-app_green ${
        false && " bg-gray-500"
      }   rounded-full px-[7vw] h-[9vh] flex flex-row justify-between items-center`}
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
