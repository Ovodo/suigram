import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TabButtons, { TabButtonType } from "../TabButtons";
import All from "./All";
import Photos from "./Photos";
import Gifs from "./Gifs";

export enum CustomTab {
  Tab1,
  Tab2,
  Tab3,
  Tab4,
}

const TabScreen = () => {
  const [selectedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab1);

  const buttons: TabButtonType[] = [
    { title: "All" },
    { title: "Photos" },
    { title: "Videos" },
    { title: "GIFs" },
  ];

  return (
    <>
      <TabButtons
        buttons={buttons}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      <View className='' style={styles.tabBtn}>
        {selectedTab === CustomTab.Tab1 ? (
          <All />
        ) : selectedTab === CustomTab.Tab2 ? (
          <Photos />
        ) : (
          <Gifs />
        )}
      </View>
    </>
  );
};

export default TabScreen;

const styles = StyleSheet.create({
  tabBtn: {
    flex: 1,
    // marginTop: 20,
    // alignItems: "center",
  },
});
