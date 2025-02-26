import icons from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const DetailSection = ({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: keyof typeof icons;
}) => {
  return (
    <View style={styles.titleSection}>
      <Image source={icons[icon]} style={styles.avatar} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleSection: {
    marginVertical: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 39,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 26,
    color: '#625D52',
  },
});

export default DetailSection;
