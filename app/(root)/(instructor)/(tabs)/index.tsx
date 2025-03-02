import BookingCard from '@/components/card';
import DateSelector from '@/components/date-selector';
import Filter from '@/components/filter';
import icons from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Welcome back</Text>
          <Text style={styles.headerSubtitle}>Haji Elhamullah</Text>
        </View>
        <View style={styles.headerIconContainer}>
          <TouchableOpacity>
            <Image source={icons.bell} style={styles.bellIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.avatar} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <DateSelector />
      <Filter />

      <BookingCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F2EA',
    flex: 1,
    paddingHorizontal: 20,
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  headerTitle: {
    color: '#444C64',
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  bellIcon: {
    height: 45,
    width: 45,
  },
  profileIcon: {
    height: 40,
    width: 40,
    marginLeft: 5,
  },
  headerIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Index;
