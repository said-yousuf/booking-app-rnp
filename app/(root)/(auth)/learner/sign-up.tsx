import { CalendarInput } from '@/components/date-picker';
import PhoneNumberInput from '@/components/phone-number-input';
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

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: {
    countryCode: string;
    number: string;
  };
  dateOfBirth: string;
  address: string;
}

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: { countryCode: '', number: '' },
      dateOfBirth: '',
      address: '',
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log('Form Data:', data);
    router.navigate('/(root)/(auth)/otp');
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
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
              <Controller
                name="firstName"
                control={control}
                rules={{ required: 'First name is required.' }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Enter your first name"
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
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Last Name</Text>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: 'Last name is required.' }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Enter your last name"
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
                  value.countryCode && value.number
                    ? true
                    : 'Phone number is required.',
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneNumberInput
                  countryCode={value.countryCode}
                  phoneNumber={value.number}
                  onChangeCountryCode={(code) =>
                    onChange({ ...value, countryCode: code })
                  }
                  onChangePhoneNumber={(num) =>
                    onChange({ ...value, number: num })
                  }
                />
              )}
            />
            {errors.phoneNumber && (
              <Text style={{ color: 'red' }}>
                {errors.phoneNumber.message as string}
              </Text>
            )}
          </View>

          {/* Date Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date of Birth</Text>
            <Controller
              name="dateOfBirth"
              control={control}
              rules={{ required: 'Date of birth is required.' }}
              render={({ field: { onChange, value } }) => (
                <CalendarInput value={value} onChange={onChange} />
              )}
            />
            {errors.dateOfBirth && (
              <Text style={{ color: 'red' }}>{errors.dateOfBirth.message}</Text>
            )}
          </View>

          {/* Address Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Location</Text>
            <Controller
              name="address"
              control={control}
              rules={{ required: 'Location is required.' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your address"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.address && (
              <Text style={{ color: 'red' }}>{errors.address.message}</Text>
            )}
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F2EA',
    flex: 1,
    paddingHorizontal: 20,
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
    gap: 10,
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
    paddingHorizontal: 10,
    borderRadius: 8,
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
    height: 49,
    width: '90%',
    maxWidth: 362,
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

export default SignUp;
