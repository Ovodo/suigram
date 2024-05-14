// src/SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const AnimatedSplashScreen: React.FC = () => {
  const animation = new Animated.Value(1);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      SplashScreen.hide();
    });
  }, [animation]);

  return (
    <Animated.View style={[styles.container, { opacity: animation }]}>
      <Text style={styles.text}>Your App Name</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Customize as needed
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AnimatedSplashScreen;
