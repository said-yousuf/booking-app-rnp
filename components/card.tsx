import icons from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Badge from './badge';

const BookingCard = () => {
  return (
    <View style={styles.bookingCardContainer}>
      <TouchableOpacity>
        <View style={styles.sessionHeaderContainer}>
          <Text style={styles.sessionText}>Session Details</Text>
          <Badge status="completed" />
        </View>

        <View style={styles.detailContainer}>
          <Image source={icons.personIcon} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Ahmad Sohail</Text>
            <Text style={styles.subtitle}>Student</Text>
          </View>
        </View>

        <View style={styles.detailContainer}>
          <Image source={icons.steerIcon} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Mar, 10, 2025</Text>
            <Text style={styles.subtitle}>Session Date</Text>
          </View>
        </View>

        <View style={styles.detailContainer}>
          <Image source={icons.searchIcon} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>G2 test with parallel testing</Text>
            <Text style={styles.subtitle}>Session Title</Text>
          </View>
        </View>

        <View style={styles.detailContainer}>
          <Image source={icons.locationIcon} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Canada</Text>
            <Text style={styles.subtitle}>Location</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sessionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    paddingVertical: 20,
    marginBottom: 20,
  },
  sessionText: {
    fontWeight: '500',
    fontSize: 16,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#8E8E93',
  },
  icon: {
    width: 16,
    height: 16,
  },
  detailContainer: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: 10,
  },
  bookingCardContainer: {
    marginTop: 20,
    marginBottom: 10,
    height: 330,
    width: 362,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    backgroundColor: 'white',
    borderRadius: 12,
  },
});

export default BookingCard;
