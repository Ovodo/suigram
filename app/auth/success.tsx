import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';


const Success = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        
      <View style={{paddingHorizontal: 25}}>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 30,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Registration or Sign in Successful
        </Text>

      </View>

    </SafeAreaView>
  );
};

export default Success;
