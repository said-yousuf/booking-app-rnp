import { PackageCard } from '@/components/Card';
import icons from '@/constants/icons';
import { router } from 'expo-router';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const HourlyPackage = () => {
  return (
    <View>
      <FlatList
        data={[{ id: '1' }, { id: '2' }, { id: '3' }]}
        keyExtractor={(item) => item.id}
        renderItem={() => (
          <View>
            <PackageCard />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          alignItems: 'center',
          marginTop: 20,
          backgroundColor: '#F5F2EA',
          position: 'relative',
        }}
      />
      <TouchableOpacity onPress={() => router.navigate('/create-package')}>
        <View style={styles.addButtonContainer}>
          <Image source={icons.plusIcon} style={styles.addImage} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addButtonContainer: {
    height: 48,
    width: 48,
    backgroundColor: '#2130E7',
    position: 'absolute',
    bottom: 30,
    right: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addImage: {
    width: 24,
    height: 24,
  },
});

export default HourlyPackage;
