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
    width: 100,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#8CDCCC',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  sessionBadgeColor: {
    width: 12,
    height: 12,
    borderRadius: '100%',
    backgroundColor: 'green',
    position: 'absolute',
    zIndex: 50,
    top: 6,
    left: 6,
  },
  sessionBadgeText: {
    fontWeight: '400',
    fontSize: 12,
    marginLeft: 10,
  },
});

export default Badge;
