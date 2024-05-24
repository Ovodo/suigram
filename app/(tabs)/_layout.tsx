import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, TouchableOpacity } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// Import Active Icon Components
import HomeActive from "../../assets/icons/home_active.svg";
import ExploreActive from "../../assets/icons/explore_active.svg";
import FavActive from "../../assets/icons/fav_active.svg";
import ProfileActive from "../../assets/icons/profile_active.svg";
import Create from "../../assets/icons/create.svg";

// Import Non-Active Icon Components
import Home from "../../assets/icons/home.svg";
import Explore from "../../assets/icons/explore.svg";
import Fav from "../../assets/icons/fav.svg";
import Profile from "../../assets/icons/profile.svg";

import GradientText from "@/components/GradientText";
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from "@/style/stylesheet";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon({
  name,
  color,
  isActive,
}: {
  name: string;
  color: string;
  isActive: boolean;
}) {
  if (isActive) {
    switch (name) {
      case "home":
        return <HomeActive width={24} height={24} />;
      case "explore":
        return <ExploreActive width={24} height={24} />;
      case "favourites":
        return <FavActive width={24} height={24} />;
      case "profile":
        return <ProfileActive width={24} height={24} />;
      default:
        return null;
    }
  } else {
    switch (name) {
      case "home":
        return <Home width={24} height={24} />;
      case "explore":
        return <Explore width={24} height={24} />;
      case "favourites":
        return <Fav width={24} height={24} />;
      case "profile":
        return <Profile width={24} height={24} />;
      default:
        return null;
    }
  }
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#a01cfe",
        headerShown: useClientOnlyValue(false, !true),
        tabBarStyle: {
          backgroundColor: "#eff4c3",
          height: 65,
          marginHorizontal: -10,
          borderTopWidth: 2,
          borderTopColor: "#A01CFE",
        },
        tabBarIconStyle: { marginTop: actuatedNormalizeVertical(10) },
        tabBarLabelStyle: { marginBottom: actuatedNormalizeVertical(10) },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='home' color={color} isActive={focused} />
          ),
          tabBarLabel: ({ focused }) => (
            <GradientText focused={focused} name='Home' />
          ),
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='info-circle'
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='explore' color={color} isActive={focused} />
          ),
          tabBarLabel: ({ focused }) => (
            <GradientText focused={focused} name='Explore' />
          ),
        }}
      />
      <Tabs.Screen
        name='create'
        options={{
          title: "Create",
          tabBarIconStyle: {
            position: "absolute",
            top: actuatedNormalizeVertical(10),
            // marginBottom: actuatedNormalizeVertical(31),
          },
          tabBarIcon: ({ color, focused }) => (
            <Create
              width={actuatedNormalize(60)}
              height={actuatedNormalizeVertical(60)}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <GradientText focused={focused} name='' />
          ),
        }}
      />
      <Tabs.Screen
        name='favourites'
        options={{
          title: "Favourites",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='favourites' color={color} isActive={focused} />
          ),
          tabBarLabel: ({ focused }) => (
            <GradientText focused={focused} name='Favourites' />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='profile' color={color} isActive={focused} />
          ),
          tabBarLabel: ({ focused }) => (
            <GradientText focused={focused} name='Profile' />
          ),
        }}
      />
    </Tabs>
  );
}
