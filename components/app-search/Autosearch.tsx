import React, {useState} from 'react';
import { View, Text, FlatList, Pressable, Dimensions, Image, StyleSheet } from 'react-native'
import FilterSvgComponent from '@/assets/icons/filter';

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

const Autosearch = () => {

    const [isList, setIsList] = useState(false);

    const GridView = ({item}) => {
        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>{item.key}</Text>
            </View>
        )
    }

    const ListView = ({item}) => {
        return (
            <View style={styles.listItem}>
                <Text style={styles.listText}>{item.key}</Text>
            </View>
        )
    }



    return (

        <>

            <View style={styles.searchFilterContainer} >

                {isList == true ? (

                <Pressable onPress={()=>setIsList(false)}>
                    <View>
                    <Text><FilterSvgComponent  size={20} style={styles.filterIcon}/></Text>
                    </View>
                </Pressable>
                ): (      

                <Pressable onPress={()=>setIsList(true)}>
                    <View>
                    <Text><FilterSvgComponent  size={20} style={styles.filterIcon}/></Text>
                    </View>
                </Pressable>

                )}
            
            </View>


            {isList == true && (

                <FlatList
                    data={formatData(data, numColumns)}
                    renderItem={ListView}
                    keyExtractor={(item, index) =>index.toString()}   
                />
            )}

            {isList == false && (

                <FlatList
                    data={formatData(data, numColumns)}
                    renderItem={GridView}
                    numColumns={numColumns}
                    keyExtractor={(item, index) =>index.toString()}    
                />
            )}

        </>

    )
}
export default Autosearch

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
        borderColor: "transparent",
        borderStyle: "solid",
        borderWidth:1,
    },


    listItem: {
        borderColor: "transparent",
        borderStyle: "solid",
        borderWidth:1,
        width: '100%',
        alignItems: 'center',
    },

    listText: {
        borderColor: "transparent",
        borderStyle: "solid",
        borderWidth:1,
        // width: 500,
        alignItems: 'center',
    },

        
    searchFilterContainer:{
        borderColor: "transparent",
        borderStyle: "solid",
        borderWidth: 1,
        padding:2,
        width: "10%",
        backgroundColor:"white",
        borderRadius: 100, 
        borderTopRightRadius:100,
        borderTopLeftRadius:100, 
        borderBottomRightRadius:100,
        borderBottomLeftRadius:100,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        alignItems: 'center', 
        position:'absolute',
        marginTop: '-14%',
        marginLeft: '85%'
    },

    searchGrid: {
        borderStyle: "solid",
    },

    filterIcon: {
        margin: "auto"
    },
  
  });