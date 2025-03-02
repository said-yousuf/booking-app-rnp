import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DateSelector = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.buttonTopContainer}>
          <Text style={styles.buttonTopText}>28</Text>
        </View>
        <Text style={styles.buttonBottom}>Mon</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 85,
  },
  buttonContainer: {
    backgroundColor: 'white',
    height: 79,
    width: 50,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#E8E6E1',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 5,
  },
  buttonTopContainer: {
    backgroundColor: '#1742FB',
    width: 41,
    height: 41,
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTopText: {
    color: 'white',
  },
  buttonBottom: {
    fontWeight: '400',
    fontSize: 12,
    marginTop: 5,
  },
});

export default DateSelector;
