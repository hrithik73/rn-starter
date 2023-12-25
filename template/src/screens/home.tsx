import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {API_URL} from '@env';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>API_URL: {API_URL}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
