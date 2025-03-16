import images from '@/constants/images';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NoTraining = () => {
  return (
    <View style={styles.container}>
      <Image source={images.packageImage} style={styles.image} />
      <Text style={styles.title}>Add a New Training</Text>
      <Text style={styles.subtitle}>
        Quickly create a learning package to help others drive safely and
        confidently.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.navigate('/(root)/(instructor)/(package)/create-package')
        }
      >
        <Text style={styles.buttonText}>Create Training</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#F5F2EA',
  },
  image: {
    height: 136,
    width: 136,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    marginHorizontal: 60,
    marginBottom: 20,
  },
  button: {
    width: 191,
    height: 45,
    backgroundColor: '#2130E7',
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
    marginTop: 8,
  },
});

export default NoTraining;
