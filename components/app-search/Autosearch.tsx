import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native';

const data = [
  { key: <Image source={require("@/assets/images/search/charles-deluvio-K4mSJ7kc0As-unsplash 1.png")} /> }, 
  { key: <Image source={require("@/assets/images/search/jesus-santos-ZBBKk2-Cgf8-unsplash 2.png")} /> }, 
  { key: <Image source={require("@/assets/images/search/jose-alejandro-cuffia-k1LNP6dnyAE-unsplash 2.png")} /> }, 
  { key: <Image source={require("@/assets/images/search/Post 3.png")} /> }, 
  { key: <Image source={require("@/assets/images/search/charles-deluvio-K4mSJ7kc0As-unsplash 1.png")} /> }, 
  { key: <Image source={require("@/assets/images/search/jesus-santos-ZBBKk2-Cgf8-unsplash 2.png")} /> }, 
  { key: <Image source={require("@/assets/images/search/charles-deluvio-K4mSJ7kc0As-unsplash 1.png")} /> }, 
  { key: <Image source={require("@/assets/images/search/jesus-santos-ZBBKk2-Cgf8-unsplash 2.png")} /> }, 
  { key: <Image source={require("@/assets/images/search/jose-alejandro-cuffia-k1LNP6dnyAE-unsplash 2.png")} /> }, 
  { key: <Image source={require("@/assets/images/search/Post 3.png")} /> }, 
  { key: <Image source={require("@/assets/images/search/charles-deluvio-K4mSJ7kc0As-unsplash 1.png")} /> }, 
  { key: <Image source={require("@/assets/images/search/jesus-santos-ZBBKk2-Cgf8-unsplash 2.png")} /> }, 
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;

export default class Autosearch extends React.Component {

  renderItem = ({ item, index }) => {

    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }

    return (
      <View
        style={styles.item}
      >
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );

  };

  render() {

    return (

    <>
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />


        {/* <FlatList
        // data={Profiles}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => (
            <View>
            <Image source={item.src} />
            <Text>{item.name}</Text>
            </View>
        )}
        /> */}

    </>

    );

  }

}

const styles = StyleSheet.create({

  container: {
    borderColor: "transparent",
    borderStyle: "solid",
    borderWidth:1
  },

  item: {
    borderColor: "transparent",
    borderStyle: "solid",
    borderWidth:1,
    alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    width: Dimensions.get('window').width / numColumns, // approximate a square
  },

  itemInvisible: {
    backgroundColor: 'red',
  },

  itemText: {
    color: '#fff',
  },

});