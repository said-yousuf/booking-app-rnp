import images from '@/constants/images';
import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NoSchedule = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={images.noSchedule} style={styles.image} />
      <Text style={styles.title}>No Schedule Rides</Text>
      <Text style={styles.subtitle}>
        you haven’t booked any appointment with instructors try booking one
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 133,
    width: 162,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#625D52',
    textAlign: 'center',
    marginHorizontal: 50,
  },
});

export default NoSchedule;
