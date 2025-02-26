import BackButton from '@/components/back-button';
import DetailSection from '@/components/detail-section';
import icons from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <BackButton />

        <Text>1/5</Text>

        <Image source={icons.status} style={styles.iconStatus} />
      </View>

      {/* Title Section */}
      <DetailSection
        title="Profile Details"
        subtitle="Lets Get you onboard! Tell us about yourself"
        icon="avatar2"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F2EA',
    flex: 1,
    paddingHorizontal: 24,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 24,
  },
  iconStatus: {
    width: 56,
    height: 6,
  },
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
export default SignUp;
