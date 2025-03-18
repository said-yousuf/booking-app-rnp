import icons from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BackButton from './Back-Button';

const SettingsTopBar = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <View>
      <View style={styles.container}>
        <BackButton />
        <Image source={icons.info} style={styles.infoIcon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    color: '#080705',
    marginBottom: 10,
  },
  description: {
    fontWeight: '400',
    fontSize: 16,
    color: '#504A40',
    lineHeight: 26,
  },
  textContainer: {
    marginVertical: 25,
  },
});

export default SettingsTopBar;
