import BookingCard from '@/components/card';
import DateSelector from '@/components/date-selector';
import Filter from '@/components/filter';
import icons from '@/constants/icons';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
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

      <View>
        <Text style={styles.date}>October 2024</Text>
      </View>

      {/* Date Selector */}
      <View>
        <FlatList
          data={[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
          ]}
          renderItem={() => <DateSelector />}
          keyExtractor={(item) => item.toString()}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 12,
            gap: 8,
          }}
        />
      </View>

      {/* Filter Section */}
      <Filter />

      {/* Booking Cards */}
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={() => <BookingCard />}
        keyExtractor={(item) => item.toString()}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
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
  date: {
    fontWeight: '500',
    fontSize: 14,
    color: '#73716E',
    marginTop: 60,
  },
});

export default Index;
