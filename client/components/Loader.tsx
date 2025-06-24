import React, { useState } from 'react';
import { View, Button, StyleSheet, Animated, Easing } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const AdvancedLoaderExample = () => {
  const [loading, setLoading] = useState(true);
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        customIndicator={
          <Animated.View style={[styles.customSpinner, { transform: [{ rotate: spin }] }]}>
            <View style={styles.spinnerHalfTop} />
            <View style={styles.spinnerHalfBottom} />
          </Animated.View>
        }
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
      
      <Button 
        title="Toggle Loader" 
        onPress={() => setLoading(!loading)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customSpinner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: 'transparent',
  },
  spinnerHalfTop: {
    width: '100%',
    height: '50%',
    borderTopWidth: 4,
    borderTopColor: '#FFF',
    borderRightWidth: 4,
    borderRightColor: 'transparent',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  spinnerHalfBottom: {
    width: '100%',
    height: '50%',
    borderBottomWidth: 4,
    borderBottomColor: '#FF3D00',
    borderLeftWidth: 4,
    borderLeftColor: 'transparent',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
});

export default AdvancedLoaderExample;