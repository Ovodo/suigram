

import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

const data = [
  { key: 'Gifs 1' }, { key: 'Gifs 2' }, { key: 'Gifs 3' }, { key: 'Gifs 4' }, { key: 'Gifs 5' }, { key: 'Gifs 6' }, { key: 'Gifs 7' }, { key: 'Gifs 8' }, { key: 'Gifs 9' }, { key: 'Gifs 10' },
];

const formatData = (data:any, numColumns:any) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;

export default class Gifs extends React.Component {

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
      <FlatList
        data={formatData(data, numColumns)}
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
    marginTop: -170,
  },

  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },

  itemInvisible: {
    backgroundColor: 'transparent',
  },

  itemText: {
    color: '#fff',
  },

});