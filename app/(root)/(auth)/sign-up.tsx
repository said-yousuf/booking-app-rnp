import { CalendarInput } from '@/components/date-picker';
import PhoneNumberInput from '@/components/phone-number-input';
import icons from '@/constants/icons';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          {' '}
          <Image source={icons.back} style={styles.iconBack} />
        </TouchableOpacity>
        <Image source={icons.status} style={styles.iconStatus} />
      </View>

      {/* Title Section */}
      <View style={styles.titleSection}>
        <Image source={icons.avatar} style={styles.avatar} />
        <Text style={styles.title}>Personal Information</Text>
        <Text style={styles.subtitle}>
          Let's get you onboard! Tell us about yourself.
        </Text>
      </View>

      {/* Name Inputs */}
      <View style={styles.nameContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>First Name</Text>
          <TextInput placeholder="Enter your first name" style={styles.input} />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput placeholder="Enter your last name" style={styles.input} />
        </View>
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          placeholder="Enter your email address"
          style={styles.input}
        />
      </View>

      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <PhoneNumberInput />
      </View>

      {/* Date Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <CalendarInput />
      </View>

      {/* Address Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location</Text>
        <TextInput placeholder="Enter your address" style={styles.input} />
      </View>

      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F2EA',
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  iconBack: {
    width: 32,
    height: 32,
  },
  iconStatus: {
    width: 40,
    height: 6,
  },
  titleSection: {
    marginVertical: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 39,
    textAlign: 'center',
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    color: '#625D52',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  inputWrapper: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#625D52',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    fontSize: 14,
    color: '#857F72',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 10,
  },
  buttonContainer: {
    position: 'absolute',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    bottom: -60,
    backgroundColor: '#2130E7',
    height: 49,
    width: 362,
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: 600,
    lineHeight: 20,
  },
});

export default SignUp;
