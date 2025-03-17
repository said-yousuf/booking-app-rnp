import icons from '@/constants/icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Path = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={icons.back2} style={styles.iconBack} />
        </TouchableOpacity>
        <Image source={icons.status} style={styles.iconStatus} />
      </View>

      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>Chose your path</Text>
        <Text style={styles.subtitle}>
          Are you here to learn to drive or offer driving?
        </Text>
      </View>

      {/* Path Buttons */}
      <View>
        <TouchableOpacity
          style={styles.pathButton}
          onPress={() => router.navigate('/(root)/(learner)/(auth)/sign-up')}
        >
          <Text style={styles.pathButtonTitle}>Learner</Text>
          <Text style={styles.pathButtonSubtitle}>
            Book appointments with Instructors
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            router.navigate('/(root)/(instructor)/(auth)/license-details')
          }
          style={styles.pathButton}
        >
          <Text style={styles.pathButtonTitle}>Instructors</Text>
          <Text style={styles.pathButtonSubtitle}>
            Setup your profile, start learning
          </Text>
        </TouchableOpacity>
      </View>
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
  iconBack: {
    width: 16,
    height: 16,
  },
  iconStatus: {
    width: 56,
    height: 6,
  },
  titleSection: {
    marginVertical: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 39,
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 26,
    color: '#737377',
  },
  pathButton: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#B8B2A7',
  },
  pathButtonTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  pathButtonSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#625D52',
  },
});

export default Path;
