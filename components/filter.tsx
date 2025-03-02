import { categories } from '@/constants/data';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Filter = () => {
  const params = useLocalSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || 'Appointments'
  );

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory('Appointments');
      router.setParams({ filter: 'Appointments' });
      return;
    }

    setSelectedCategory(category);
    router.setParams({ filter: category });
  };
  return (
    <View style={styles.filerContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              selectedCategory == item.category
                ? styles.selectedCategory
                : styles.unSelectedCategory,
            ]}
            onPress={() => handleCategoryPress(item.category)}
          >
            <Image source={item.icon} style={styles.icon} />
            <Text
              style={[
                styles.text,
                selectedCategory == item.category
                  ? styles.selectedCategoryText
                  : styles.unSelectedCategoryText,
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 14,
    flex: 1,
    marginRight: 10,
    borderRadius: 8,
    position: 'relative',
  },
  selectedCategory: {
    backgroundColor: '#E8E6E1',
  },
  unSelectedCategory: {
    backgroundColor: '#D3CEC4',
    borderColor: '#0061ff1a',
    borderWidth: 1,
  },
  unSelectedCategoryText: {},
  selectedCategoryText: {},
  icon: {
    width: 18,
    height: 18,
    position: 'absolute',
    zIndex: 50,
    top: 8,
    left: 5,
  },
  text: {
    marginLeft: 12,
    color: '#080705',
  },
  filerContainer: {
    height: 33,
    marginTop: 20,
  },
});

export default Filter;
