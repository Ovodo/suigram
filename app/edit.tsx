import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, ScrollView, Text, View , SafeAreaView, Image, TextInput, TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { backgroundColor, borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function EditProfile() {

  const data = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
    { label: 'Bisexual', value: '3' },
  ];

   //gender dropdown value state mode.
  const [value, setValue] = useState(null);


  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}

      <ScrollView>

      <View style ={styles.header}>

          <View>
            <Link href="/profile" style={styles.prev}>
                <Icon name="arrow-left" size={20} />
            </Link>
          </View>

          <View>
            <Text style={styles.title}>Edit Profile</Text>
          </View>

      </View>




      <View style={styles.ImageContainer}>
      <Image source={require("../assets/images/users/user-8.jpg")} style={styles.Image}/>
            <Text style ={styles.blueText}>Profile Image </Text>
      </View>

      <View style={styles.FormContainer}>

        <View style = {styles.InputField} >
            <Text style ={styles.blueText}>Name </Text>
            <TextInput style={styles.defualtInputs}>Raymond Uche</TextInput>
        </View>

        <View style = {styles.InputField} >
            <Text style ={styles.blueText}>Username</Text>
            <TextInput style={styles.defualtInputs}>Uche</TextInput>
        </View>

        <View style = {styles.InputField} >
          <Text style ={styles.blueText}>Bio</Text>
          <TextInput style={styles.defualtInputs}>My name is Uche. I like dancing in the rain and traveling all around the world.</TextInput>
        </View>

        <View style = {styles.InputField} >
            <Text style ={styles.blueText}>Gender</Text>
            <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Gender"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                      setValue(item.value);
                    }}
            />

        </View>

        <View style = {styles.InputField} >
            <Text style ={styles.blueText}>Phone Contact </Text>
            <TextInput style={styles.defualtInputs}>+233550432079</TextInput>
        </View>

        <View style = {styles.InputField} >
            <Text style ={styles.blueText}>Email Contact </Text>
            <TextInput style={styles.defualtInputs}>suigram@mail.com</TextInput>
        </View>

      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
      </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    height: 50,
    backgroundColor: '#A01CFE',
    marginTop: 50,
    flexDirection: 'row',
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },

  prev: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: -120
  },


  ImageContainer: {
    alignItems: 'center'
  },

  Image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginTop: 30,
  },

  FormContainer:{
    marginStart: 50,
    marginEnd: 50,
  },

  greyText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 14,

  },

  blueText:{
    color: '#A01CFE',
  },

  InputField: {
    marginTop: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
    paddingBottom: 5,
  },

  defualtInputs: {
    fontSize: 17,
  },

  buttonContainer:{
    marginEnd: 40,
    marginStart: 40,
  },

  buttonText:{
    color: 'white',
  },


  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A01CFE',
    marginTop: 40,
    height: 50,
    borderRadius: 30,
  },

    dropdown: {
      margin: 10,
      height: 5,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
});