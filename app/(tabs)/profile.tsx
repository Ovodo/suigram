import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import TabScreen from '@/components/TabScreen';
// import FormButton from '../components/FormButton';
// import {AuthContext} from '../navigation/AuthProvider';

// import firestore from '@react-native-firebase/firestore';
// import PostCard from '../components/PostCard';

// const ProfileScreen = ({navigation, route}) => {
const ProfileScreen = () => {


//   const {user, logout} = useContext(AuthContext);

//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [deleted, setDeleted] = useState(false);
//   const [userData, setUserData] = useState(null);

//   const fetchPosts = async () => {
//     try {
//       const list = [];

//       await firestore()
//         .collection('posts')
//         .where('userId', '==', route.params ? route.params.userId : user.uid)
//         .orderBy('postTime', 'desc')
//         .get()
//         .then((querySnapshot) => {
//           // console.log('Total Posts: ', querySnapshot.size);

//           querySnapshot.forEach((doc) => {
//             const {
//               userId,
//               post,
//               postImg,
//               postTime,
//               likes,
//               comments,
//             } = doc.data();
//             list.push({
//               id: doc.id,
//               userId,
//               userName: 'Test Name',
//               userImg:
//                 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
//               postTime: postTime,
//               post,
//               postImg,
//               liked: false,
//               likes,
//               comments,
//             });
//           });
//         });

//       setPosts(list);

//       if (loading) {
//         setLoading(false);
//       }

//       console.log('Posts: ', posts);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const getUser = async() => {
//     await firestore()
//     .collection('users')
//     .doc( route.params ? route.params.userId : user.uid)
//     .get()
//     .then((documentSnapshot) => {
//       if( documentSnapshot.exists ) {
//         console.log('User Data', documentSnapshot.data());
//         setUserData(documentSnapshot.data());
//       }
//     })
//   }

//   useEffect(() => {
//     getUser();
//     fetchPosts();
//     navigation.addListener("focus", () => setLoading(!loading));
//   }, [navigation, loading]);

//   const handleDelete = () => {};

  return (

    
//     <Text
//     style={{
//       fontFamily: 'Roboto-Medium',
//       fontSize: 28,
//       fontWeight: '500',
//       color: '#333',
//       marginBottom: 30,
//       textAlign:'center',
//       borderWidth:'2px',
//       borderStyle:'solid',
//       borderColor:'black'
//     }}>
//     Profile Screen
//   </Text>
    // <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
    //   <ScrollView
    //     style={styles.container}
    //     contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
    //     showsVerticalScrollIndicator={false}>
    //     <Image
    //       style={styles.userImg}
    //       source={{uri: userData ? userData.userImg || 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}
    //     />
    //     <Text style={styles.userName}>{userData ? userData.fname || 'Test' : 'Test'} {userData ? userData.lname || 'User' : 'User'}</Text>
    //     {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
    //     <Text style={styles.aboutUser}>
    //     {userData ? userData.about || 'No details added.' : ''}
    //     </Text>
    //     <View style={styles.userBtnWrapper}>
    //       {route.params ? (
    //         <>
    //           <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
    //             <Text style={styles.userBtnTxt}>Message</Text>
    //           </TouchableOpacity>
    //           <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
    //             <Text style={styles.userBtnTxt}>Follow</Text>
    //           </TouchableOpacity>
    //         </>
    //       ) : (
    //         <>
    //           <TouchableOpacity
    //             style={styles.userBtn}
    //             onPress={() => {
    //               navigation.navigate('EditProfile');
    //             }}>
    //             <Text style={styles.userBtnTxt}>Edit</Text>
    //           </TouchableOpacity>
    //           <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
    //             <Text style={styles.userBtnTxt}>Logout</Text>
    //           </TouchableOpacity>
    //         </>
    //       )}
    //     </View>

    //     <View style={styles.userInfoWrapper}>
    //       <View style={styles.userInfoItem}>
    //         <Text style={styles.userInfoTitle}>{posts.length}</Text>
    //         <Text style={styles.userInfoSubTitle}>Posts</Text>
    //       </View>
    //       <View style={styles.userInfoItem}>
    //         <Text style={styles.userInfoTitle}>10,000</Text>
    //         <Text style={styles.userInfoSubTitle}>Followers</Text>
    //       </View>
    //       <View style={styles.userInfoItem}>
    //         <Text style={styles.userInfoTitle}>100</Text>
    //         <Text style={styles.userInfoSubTitle}>Following</Text>
    //       </View>
    //     </View>

    //     {posts.map((item) => (
    //       <PostCard key={item.id} item={item} onDelete={handleDelete} />
    //     ))}
    //   </ScrollView>
    // </SafeAreaView>

    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

       <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}>



        <View style={styles.userProfileOneContainer}>

            <View style={styles.userProfileContainer}>

              <View style={styles.userNameContainer}>
                  
                  <Text style={styles.userName}>Uche</Text>
      
              </View>

                <View style={styles.userImgcontainer}>

                    <Image
                    style={styles.userImg}
                    source={require('../../assets/images/users/user-8.jpg')}
                    />

                </View>

            </View>


            <View style={styles.userInfoWrapperContainer}>

              <View style={styles.userInfoWrapper}>

                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>34</Text>
                    <Text style={styles.userInfoSubTitle}>Upvotes</Text>
                </View>

                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>200</Text>
                    <Text style={styles.userInfoSubTitle}>Downvotes</Text>
                </View>

                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>342</Text>
                    <Text style={styles.userInfoSubTitle}>Shares</Text>
                </View>

              </View>

              <View style={styles.userInfoWrapper}>

                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>34</Text>
                    <Text style={styles.userInfoSubTitle}>Memes</Text>
                </View>

                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>200</Text>
                    <Text style={styles.userInfoSubTitle}>Followers</Text>
                </View>

                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>342</Text>
                    <Text style={styles.userInfoSubTitle}>Following</Text>
                </View>

              </View>

            </View>

        </View>

        <View>
            
            <Text style={styles.aboutUser}>My name is Uche. I like dancing in the rain and traveling all around the world.</Text>
    
        </View>
    
         <View style={styles.userBtnWrapper}>
           
            <>
              <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Edit Profile</Text>
              </TouchableOpacity>
            </>
          
        </View>

        <View>
             <TabScreen />
        </View>

        </ScrollView>

    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 70
  },

  userProfileOneContainer: {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-around',
  },

  userProfileContainer: {
  },

  userNameContainer: {
    alignItems: 'flex-start', 
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
    fontWeight: 'bolder',
    marginTop: 10,
    marginBottom: 10,
    marginLeft:10,
    letterSpacing: -0.40799999237060547,
    lineHeight: 22,
  },

  aboutUser: {
    fontSize: 13,
    fontWeight: 'bolder',
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
    lineHeight: 16.25,
  },

  userInfoWrapperContainer: {
    paddingTop: 3,
    paddingBottom: 5,
  },

  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',    
    marginTop: "5%",
  },

  userInfoItem: {
    justifyContent: 'center',
    borderColor: '#F6EFFB',
    borderStyle:'solid',
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    width: 85,
    margin:2
  },

  userInfoTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  userInfoSubTitle: {
    fontSize: 10.2,
    color: '#666',
    textAlign: 'center',
  },

});
