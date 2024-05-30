import React, {useState} from 'react';
import { View, Text, FlatList, Pressable, Dimensions, Image, StyleSheet, ScrollView } from 'react-native'
import FilterIcon from '@/assets/icons/filter.svg';
import MutiGallaryIcon from "@/assets/icons/mutigallaryicon.svg";

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

const formatData = (data: any, numColumns: any) => {
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
                <View style={[styles.itemCategoryPhotos, {transform: [{translateX: 40}]},]}>

                    <MutiGallaryIcon/>

                </View>


                    {item.key}
                <View style={styles.itemCategoryGifContainer}><Text style={styles.itemCategoryGif}>GIF</Text></View>
            </View>
        )
    }

    const ListView = ({item}) => {
        return (
            <View style={styles.listItem}>
                <View style={[styles.itemCategoryPhotos, {transform: [{translateX: 40}]},]}><MutiGallaryIcon/></View>
                {item.key}
                <Text style={styles.itemCategoryGif}>GIF</Text>
            </View>
        )
    }



    return (

        <>


            {/*
            <View style={styles.searchFilterContainer} >

                {isList == true ? (

                <Pressable onPress={()=>setIsList(false)}>
                    <View>
                        <FilterIcon  size={20} style={styles.filterIcon}/>
                    </View>
                </Pressable>
                ): (

                <Pressable onPress={()=>setIsList(true)}>
                    <View>
                        <FilterIcon  size={20} style={styles.filterIcon}/>
                    </View>
                </Pressable>

                )}

            </View>

            */}


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
        borderWidth:1,
        marginTop: 80,
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

    itemCategoryPhotos: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "transparent",
        backgroundColor: "transparent",
        position: "absolute",
        zIndex: 1,
        marginLeft: 80,
        marginTop: 9,
    },


    itemCategoryGif: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "white",
        position: "absolute",
        zIndex: 1,
        marginLeft: -50,
        marginTop: -30,
        borderRadius: 50,
        color: "white",
        fontSize: 7,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 2,
        paddingBottom: 2,

        // padding: 2px 8px 2px 8px;
        // gap: 10px;
        // border-radius: 8px 0px 0px 0px;
        // border: 0.5px 0px 0px 0px;
        // opacity: 0px;

    },

        
    searchFilterContainer:{
        borderColor: "transparent",
        borderStyle: "solid",
        borderWidth: 1,
        padding:2,
        width: "auto",
        height: 25,
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
        elevation: 10,
        alignItems: 'center', 
        position:'absolute',
        marginTop: '-13%',
        marginLeft: '85%'
    },

    searchGrid: {
        borderStyle: "solid",
    },

    filterIcon: {
        margin: "auto"
    },
  
  });