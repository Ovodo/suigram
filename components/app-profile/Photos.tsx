import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

const data = [
  { key: 'Photos' }, { key: 'Photos' }, { key: 'Photos' }, { key: 'Photos' }, { key: 'Photos' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' },{ key: 'K' },
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

export default class Photos extends React.Component {

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