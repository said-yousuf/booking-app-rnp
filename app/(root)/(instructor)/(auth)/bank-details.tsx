import BackButton from '@/components/Back-Button';
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

interface BankDetailsFormData {
  bankName: string;
  accountName: string;
  transitNumber: string;
  institutionNumber: string;
}

const BankDetails = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<BankDetailsFormData>();

  const onSubmit = (data: BankDetailsFormData) => {
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

            <Text>5/5</Text>

            <Image source={icons.status} style={styles.iconStatus} />
          </View>

          {/* Title Section */}
          <DetailSection
            title="Bank Details"
            subtitle="Your card must match the verification code."
            icon="bank"
          />

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Bank Name</Text>
            <Controller
              name="bankName"
              control={control}
              rules={{ required: 'Bank Name is required.' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your Bank Name"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.bankName && (
              <Text style={{ color: 'red' }}>{errors.bankName.message}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Account Name</Text>
            <Controller
              name="accountName"
              control={control}
              rules={{ required: 'Account Name is required' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your Account Name"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.accountName && (
              <Text style={{ color: 'red' }}>{errors.accountName.message}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Transit Number</Text>
            <Controller
              name="transitNumber"
              control={control}
              rules={{ required: 'Transit Number is required' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your Transit Number"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.transitNumber && (
              <Text style={{ color: 'red' }}>
                {errors.transitNumber.message}
              </Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Institution Name</Text>
            <Controller
              name="institutionNumber"
              control={control}
              rules={{ required: 'Institution Name is required' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your Institution Name"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.institutionNumber && (
              <Text style={{ color: 'red' }}>
                {errors.institutionNumber.message}
              </Text>
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
export default BankDetails;
