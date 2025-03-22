import icons from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const RequestTopBar = () => {
  return (
    <View>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.title}>Ride Request’s</Text>
          <Text style={styles.subtitle}>Haji Elham</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={icons.bell} style={styles.icon} />
          <Image source={icons.avatar} style={styles.icon} />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Image source={icons.search} style={styles.searchIcon} />
        <TextInput placeholder="Search instructor" style={styles.input} />
        <Image source={icons.bell2} style={styles.bellIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '500',
    fontSize: 24,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    height: 45,
    width: 45,
    marginLeft: 5,
  },
  title: {
    color: '#444C64',
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 4,
  },
  subtitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#FFF',
    width: 362,
    height: 48,
    borderRadius: 20,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    fontSize: 14,
    color: '#857F72',
    paddingLeft: 35,
  },
  inputContainer: {
    marginVertical: 20,
    position: 'relative',
  },
  searchIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 10,
    top: 15,
    zIndex: 50,
  },
  bellIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 20,
    top: 15,
    zIndex: 50,
  },
});

export default RequestTopBar;
