import { settingData } from '@/constants/data';
import icons from '@/constants/icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.profileContainer}>
        <View style={styles.profileRight}>
          <Image source={icons.profile} style={styles.profileImage} />
          <View>
            <Text style={styles.profileName}>Haji Elham</Text>
            <Text style={styles.profileEmail}>sohail@gmail.com</Text>
          </View>
        </View>

        <Image source={icons.go} style={styles.redirectIcon} />
      </TouchableOpacity>

      {settingData.map((item, index) => {
        return item.itemName === 'Notifications' ? (
          <View style={styles.settingContainer}>
            <View style={styles.settingItemContainer}>
              <Image source={item.itemIcon} style={styles.settingIcon} />
              <Text style={styles.settingText}>{item.itemName}</Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        ) : (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (item.redirectPath) {
                router.navigate(item.redirectPath as any);
              }
            }}
          >
            <View style={styles.settingContainer}>
              <View style={styles.settingItemContainer}>
                <Image source={item.itemIcon} style={styles.settingIcon} />
                <Text style={styles.settingText}>{item.itemName} </Text>
              </View>
              <Image source={icons.go} style={styles.redirectIcon} />
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F2EA',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 362,
    height: 44,
    marginVertical: 20,
  },
  profileRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 64,
    height: 64,
    marginRight: 10,
  },
  profileName: {
    fontWeight: '600',
    fontSize: 20,
    color: '#27241D',
  },
  profileEmail: {
    fontWeight: '400',
    fontSize: 14,
    color: '#625D52',
  },
  redirectIcon: {
    width: 24,
    height: 24,
  },
  settingIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 362,
    height: 44,
    marginTop: 20,
  },
  settingItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Setting;
