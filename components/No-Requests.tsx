import images from '@/constants/images';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const NoRequests = () => {
  return (
    <View style={styles.container}>
      <Image source={images.NoRequest} style={styles.image} />
      <Text style={styles.title}>No scheduled rides</Text>
      <Text style={styles.subtitle}>
        you haven’t booked any appointment with instructors try booking one
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: 147,
    height: 155,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  subtitle: {
    color: '#625D52',
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 50,
    textAlign: 'center',
  },
});

export default NoRequests;
