import icons from '@/constants/icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const BackButton = () => {
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Image source={icons.back2} style={styles.iconBack} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconBack: {
    width: 16,
    height: 16,
  },
});
export default BackButton;
