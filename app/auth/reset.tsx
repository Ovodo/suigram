import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';


const PasswordReset = () => {
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
            Password Reset
        </Text>

      </View>

    </SafeAreaView>
  );
};

export default PasswordReset;
