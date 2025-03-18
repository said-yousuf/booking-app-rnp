import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Badge = ({ status }: { status: string }) => {
  return (
    <View style={styles.sessionBadgeContainer}>
      <View style={styles.sessionBadgeColor}></View>
      <Text style={styles.sessionBadgeText}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sessionBadgeContainer: {
    width: 82,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#F1FCED ',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.2,
    flexDirection: 'row',
    borderColor: '#C4EDB8',
  },
  sessionBadgeColor: {
    width: 9,
    height: 9,
    borderRadius: '100%',
    backgroundColor: 'green',
  },
  sessionBadgeText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#27241D',
    marginLeft: 2,
  },
});

export default Badge;
