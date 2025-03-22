import images from '@/constants/images';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const NoMessages = () => {
  return (
    <View style={styles.container}>
      <Image source={images.noMessage} style={styles.image} />
      <Text style={styles.title}>No new messages</Text>
      <Text style={styles.subtitle}>
        Your inbox is empty. Check back later or start a new chat.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    paddingHorizontal: 70,
    textAlign: 'center',
  },
});

export default NoMessages;
