import icons from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const TopBar = ({ label }: { label: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>

      <View style={styles.iconContainer}>
        <Image source={icons.bell} style={styles.icon} />
        <Image source={icons.avatar} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '500',
    fontSize: 24,
  },
  iconContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  icon: {
    height: 45,
    width: 45,
    marginLeft: 5,
  },
});

export default TopBar;
