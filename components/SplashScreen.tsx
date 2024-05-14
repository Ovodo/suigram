import React, { useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const AnimatedSplashScreen = () => {
  const animation = new Animated.Value(1);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
    //   SplashScreen.hide();
    });
  }, [animation]);

  return (
    <Animated.View style={[styles.container, { opacity: animation }]}>
      <Text style={styles.text}>SUIGRAM</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9D1AFE',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AnimatedSplashScreen;
