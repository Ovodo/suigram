import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  FlatList
} from 'react-native';

// import filter from 'lodash.filter';
import Icons from "react-native-vector-icons/FontAwesome";

import Icons2 from "react-native-vector-icons/Entypo";

import Autosearch from '@/components/app-search/Autosearch';

import SearchSvgComponent from '@/assets/icons/search';


import FilterSvgComponent from '@/assets/icons/filter';

//api link 
// const API_ENDPOINT = "";

const SearchScreen = () => {


  // const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);
  // const [fullData, setFullData] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchData(API_ENDPOINT);
  // }, []);

  // const fetchData = async(url) => {
  //   try {
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     setData(json.results);

  //     console.log(json.results);
  //     setFullData(json.results);
  //     setIsLoading(false);
  //   }

  //   catch(error) {

  //     setError(error);
  //     console.log(error);
  //   }
  // }

  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  //   const formattedQuery = query.toLowerCase();
  //   const filteredData = filter(fullData, (user)=> {
  //     return contains(user, formattedQuery)
  //   });
  //   setData(filteredData);
  // };

  // const contains = ({name, email}, query) => {
  //   const {first, last} = name;

  //   if(first.includes(query) || last.includes(query) || email.includes(query)) {
  //     return true;
  //   }

  //   else {
  //     return false;
  //   }
  // }

  // if(isLoading) {
  //   return (
  //     <View style={{flex:1, justifyContent: "center", alignItems:"center"}}> 
  //       <ActivityIndicator size={"large"} color="#5500dc" />
  //     </View>
  //   )
  // }

  // if(error) {
  //   return (
  //     <View style={{flex:1, justifyContent: "center", alignItems:"center"}}> 
  //       <Text> Error in fetching data, please check your internet connection.</Text>
  //     </View>
  //   )
  // }

  return (

    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

       <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}>


          <View id='search-bar-container' style={styles.searchBarContainer}>

            <SafeAreaView>


              <View style={styles.searchAndFilterContainer}>

                <View style={styles.searchContainer}>

                  <View style={styles.searchBarTextContainer}>
                    <TextInput 
                      placeholder='Search' 
                      clearButtonMode="always" 
                      style={styles.searchBar}
                      autoCapitalize="none"    
                      autoCorrect={false} 
                      // value={searchQuery}
                      // onChangeText={(query) => handleSearch(query)}   
                      // onFocus={this.handleFocus}
                      // onBlur={this.handleBlur}
                      // style={[//Your Styles, {
                      //     borderBottomColor: this.state.isFocused
                      //         ? 'black'
                      //         : 'red',
                      //     borderBottomWidth: 1,
                      // }]}  
                    />
                  </View>
                  
                  <View style={styles.searchAndFilterContainerIcon}>

                    <SearchSvgComponent size={20} style={styles.searchIcon}/>
                    {/* <Icons name="search" size={20} style={styles.searchIcon}/> */}
                  </View>
                  


                </View>

                
                <View style={styles.searchFilterContainer}>
                  <FilterSvgComponent  size={20} style={styles.filterIcon}/>
                  {/* <Icons2 name="switch" size={20} style={styles.filterIcon}/> */}
                </View>
                
              </View>







              {/* <FlatList 
                data={data}
                keyExtractor={(item) => item.login.username}
                renderItem={({item})=> (
                  <View style={styles.itemContainer}>
                    <Image style={styles.image} source={{uri: item.picture.thumbnail}}/>
                    <View>
                      <Text style={styles.textName}>{item.name.first} {item.name.last}</Text>
                      <Text style={styles.textEmail}>{item.email}</Text>
                    </View>
                  </View>
                )}

              
              /> */}

            </SafeAreaView>

          </View>



          <View id='search-items-container' style={styles.searchGrid}>
              <>
                <Autosearch/>
              </>
          </View>

        </ScrollView>

    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  
  searchBarContainer: {
    borderStyle: "solid",
    borderColor: "transparent",
    borderWidth: 1,
    marginBottom: 10,
    padding: 5
  },

  searchBar: {
    paddingHorizontal: 20,
    paddingRight:0, 
    paddingVertical: 5, 
    borderColor:"transparent", 
    borderWidth: 1, 
    borderRadius: 100,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    outlineColor: "transparent",
    outlineStyle: "solid",
    outlineWidth: 1,
    // input:focus {
      // outline: "none",
    // }
    
  },

  searchAndFilterContainer: {
    borderWidth: 1.5,
    borderColor: "transparent",
    borderStyle: "solid",
    padding: 1,
    flexDirection:"row",
    justifyContent: "space-between",
  },

  searchContainer: {
    borderColor: "#FFFFFF",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor:"#FFFFFF",
    width: "80%",
    height: 40,
    flexDirection:"row",
    justifyContent:"space-between",
    borderRadius: 30,  
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },

  searchBarTextContainer: {
    borderColor: "transparent",
    borderStyle: "solid",
    borderWidth: 1,
    padding:2,
    width: "90%",
    borderRadius: 30, 
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0, 
  },


  searchAndFilterContainerIcon: {
    borderColor: "transparent",
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent:"center",
    marginRight:30,
  },

  searchIcon: {
    margin: "auto"
  },

  searchFilterContainer:{
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    padding:2,
    width: "15%",
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
    justifyContent:"center",
  },

  searchGrid: {
    borderStyle: "solid",
  },

  filterIcon: {
    margin: "auto"
  },

  userProfileOneContainer: {
    backgroundColor: 'none',
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },

  userProfileContainer: {
  },

  userNameContainer: {
    alignItems: 'flex-start', 
  },
  
  userImgcontainer: {
  },

  userImg: {
    height: 83,
    width: 83,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#A01CFE',

  },

  userName: {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 10,
    marginBottom: 10,
    marginLeft:10,
    letterSpacing: -0.40799999237060547,
    lineHeight: 22,
  },

  aboutUser: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    borderWidth: 4,
    borderColor: 'transparent',
    padding: 5,
    lineHeight:20,
    paddingLeft: 30,
    paddingRight: 30,

  },

  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
    display: 'flex',
  },

  userBtn: {
    borderColor: '#A01CFE',
    backgroundColor: '#A01CFE',
    color: 'white',
    borderWidth: 2,
    borderRadius:30,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    width: 120,
    height: 40,
    gap: 10
  },

  userBtnTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 16.25
  
  },

  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 227,
    marginVertical: 20,
  },

  userInfoItem: {
    justifyContent: 'center',
    borderColor: 'red',
    borderStyle:'solid'
    },

  userInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },

  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
  },

  textEmail: {
    fontSize: 14,
    marginLeft: 10,
    color: "grey",
  }



});
