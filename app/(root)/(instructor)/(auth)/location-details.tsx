import BackButton from '@/components/Back-Button';
import CountryPickerComponent from '@/components/Country-Picker';
import DetailSection from '@/components/Detail-Section';
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
  country: string;
  city: string;
  street: string;
  postalCode: string;
}

const SignUp = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ProfileDetailsFormData>();

  const onSubmit = (data: ProfileDetailsFormData) => {
    console.log('FormData: ', data);
    router.navigate('/(root)/(instructor)/(auth)/license-details');
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <BackButton />
            <Text>2/5</Text>
            <Image source={icons.status} style={styles.iconStatus} />
          </View>

          {/* Title Section */}
          <DetailSection
            title="Location Details"
            subtitle="Let’s Get you onboard! Tell us about yourself"
            icon="location"
          />

          {/* Country Picker */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Country</Text>
            <Controller
              name="country"
              control={control}
              rules={{ required: 'Country is required.' }}
              render={({ field: { onChange, value } }) => (
                <CountryPickerComponent value={value} onChange={onChange} />
              )}
            />
            {errors.country && (
              <Text style={{ color: 'red' }}>{errors.country.message}</Text>
            )}
          </View>

          {/* City Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>City</Text>
            <Controller
              name="city"
              control={control}
              rules={{ required: 'City is required' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your City"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.city && (
              <Text style={{ color: 'red' }}>{errors.city.message}</Text>
            )}
          </View>

          {/* Street Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Street</Text>
            <Controller
              name="street"
              control={control}
              rules={{ required: 'Street is required.' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your street address"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.street && (
              <Text style={{ color: 'red' }}>{errors.street.message}</Text>
            )}
          </View>

          {/* Postal Code Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Postal</Text>
            <Controller
              name="postalCode"
              control={control}
              rules={{ required: 'Postal Code is required.' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your postal code"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.postalCode && (
              <Text style={{ color: 'red' }}>{errors.postalCode.message}</Text>
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

export default SignUp;
