import icons from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import BackButton from './Back-Button';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Image source={icons.status} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  image: {
    width: 40,
    height: 6,
  },
});

export default TopBar;
