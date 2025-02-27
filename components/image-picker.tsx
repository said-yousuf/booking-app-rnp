import icons from '@/constants/icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ImagePickerComponentProps {
  value: string | null;
  onChange: (value: string | null) => void;
}

const ImagePickerComponent = ({
  value,
  onChange,
}: ImagePickerComponentProps) => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.buttonContent}>
            <Image source={icons.openGallary} style={styles.icon} />
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTextTitle}>Open photo gallery</Text>
              <Text style={styles.buttonTextSubtitle}>
                JPEG, PNG formats, up to 5 MB.
              </Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 72,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    margin: 10,
  },
  buttonTextContainer: {
    flexDirection: 'column',
  },
  buttonTextTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#080705',
    marginBottom: 5,
  },
  buttonTextSubtitle: {
    fontSize: 12,
    fontWeight: '400',
  },
});

export default ImagePickerComponent;
