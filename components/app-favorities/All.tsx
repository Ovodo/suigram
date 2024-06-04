import { profileImages } from "@/constants/data";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";

const data = [
  { key: "All 1" },
  { key: "All 2" },
  { key: "All 3" },
  { key: "All 4" },
  { key: "All 5" },
  { key: "All 6" },
  { key: "All 7" },
  { key: "All 8" },
  { key: "All 9" },
  { key: "All 10" },
];

const formatData = (data: any, numColumns: any) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;

export default class All extends React.Component {
  renderItem = ({ item, index }: { item: any; index: number }) => {
    if (!item) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }

    return (
      // <View style={styles.item}>
      <Image className="w-[33.33vw] h-[33.33vw]" source={item} />
      // </View>
    );
  };

  render() {
    return (
      <FlatList
        data={profileImages}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderColor: "transparent",
    borderWidth: 10,
    flex: 1,
  },

  item: {
    backgroundColor: "#4D243D",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: Dimensions.get("window").width / numColumns, // approximate a square
  },

  itemInvisible: {
    backgroundColor: "transparent",
  },

  itemText: {
    color: "#fff",
  },
});
