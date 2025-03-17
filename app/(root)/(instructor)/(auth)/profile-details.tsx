import BackButton from '@/components/Back-Button';
import DetailSection from '@/components/Detail-Section';
import PhoneNumberInput from '@/components/Phone-Number-Input';
import icons from '@/constants/icons';
import { router } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface ProfileDetailsFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string; // now a single string containing both country code and number
  password: string;
}

const ProfileDetails = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ProfileDetailsFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '', // stored as a single string
      password: '',
    },
  });

  const onSubmit = (data: ProfileDetailsFormData) => {
    console.log('FormData: ', data);
    router.navigate('/(root)/(instructor)/(auth)/location-details');
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <BackButton />
            <Text>1/5</Text>
            <Image source={icons.status} style={styles.iconStatus} />
          </View>

          {/* Title Section */}
          <DetailSection
            title="Profile Details"
            subtitle="Lets Get you onboard! Tell us about yourself"
            icon="avatar2"
          />

          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: 'First Name is required.' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your First Name"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.firstName && (
              <Text style={{ color: 'red' }}>{errors.firstName.message}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <Controller
              name="lastName"
              control={control}
              rules={{ required: 'Last Name is required' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your Last Name"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.lastName && (
              <Text style={{ color: 'red' }}>{errors.lastName.message}</Text>
            )}
          </View>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email address is required.',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address.',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your email address"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                />
              )}
            />
            {errors.email && (
              <Text style={{ color: 'red' }}>{errors.email.message}</Text>
            )}
          </View>

          {/* Phone Number Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                validate: (value) =>
                  value && value.includes('-')
                    ? true
                    : 'Phone number is required.',
              }}
              render={({ field: { onChange, value } }) => {
                const [currentCountryCode, currentNumber] = value
                  ? value.split('-')
                  : ['', ''];
                return (
                  <PhoneNumberInput
                    countryCode={currentCountryCode}
                    phoneNumber={currentNumber}
                    onChangeCountryCode={(code) =>
                      onChange(`${code}-${currentNumber}`)
                    }
                    onChangePhoneNumber={(num) =>
                      onChange(`${currentCountryCode}-${num}`)
                    }
                  />
                );
              }}
            />
            {errors.phoneNumber && (
              <Text style={{ color: 'red' }}>
                {errors.phoneNumber.message as string}
              </Text>
            )}
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Password is required.',
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your Password"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="visible-password"
                />
              )}
            />
            {errors.password && (
              <Text style={{ color: 'red' }}>{errors.password.message}</Text>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Save & Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F2EA',
    flex: 1,
    paddingHorizontal: 24,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 24,
  },
  iconStatus: {
    width: 56,
    height: 6,
  },
  titleSection: {
    marginVertical: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 39,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 26,
    color: '#625D52',
  },
  inputWrapper: {
    flex: 1,
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
    paddingHorizontal: 12,
    borderRadius: 10,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    fontSize: 14,
    color: '#857F72',
  },
  inputContainer: {
    marginVertical: 10,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: '#2130E7',
    height: 56,
    width: '90%',
    maxWidth: 360,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20,
  },
});

export default ProfileDetails;
