import TopBar from '@/components/Top-Bar-2';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CreatePackage = () => {
  return (
    <View style={styles.container}>
      <TopBar />

      <Text style={styles.title}>Select type of your training Package</Text>
      <Text style={styles.subtitle}>
        Are you here to learn to drive or offer drivin?
      </Text>

      {/* Path Buttons */}
      <View>
        <TouchableOpacity style={styles.pathButton}>
          <Text style={styles.pathButtonTitle}>Hourly Training</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pathButton}>
          <Text style={styles.pathButtonTitle}>Custom Package</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    position: 'relative',
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 32,
    marginVertical: 10,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 16,
    color: '#737377',
    marginBottom: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#2130E7',
    height: 56,
    width: 362,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20,
  },
  pathButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#B8B2A7',
    height: 52,
    width: 362,
    justifyContent: 'center',
  },
  pathButtonTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 15,
  },
});

export default CreatePackage;
