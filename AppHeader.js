import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const AppHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('@/assets/images/goal-setting-basics.jpg')}
        style={styles.logo}
        resizeMode="cover"
      />
      <Text style={styles.headerText}>🎯 Achieve Your Goals!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: '200%',
    height: 200,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Brayles',
  },
});

export default AppHeader;
