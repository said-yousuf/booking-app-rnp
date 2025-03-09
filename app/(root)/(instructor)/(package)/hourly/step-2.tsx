import ExcludedDaysSelector from '@/components/Days-Selector';
import TopBar from '@/components/Top-Bar-2';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface CreatePackage {
  trainingType: string;
  dateAndTime: string;
  excludedDays: string[];
}

const PackageCreation = () => {
  const [selectedType, setSelectedType] = useState();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<CreatePackage>();

  const onSubmit = (data: CreatePackage) => {
    console.log('FormData: ', data);
    router.navigate('/hourly/step-2');
  };

  return (
    <View style={styles.container}>
      <TopBar />

      <Text style={styles.title}>Create Packages</Text>
      <Text style={styles.subtitle}>Describe your package details</Text>

      {/* <View style={styles.inputContainer}>
        <Text style={styles.text}>Training Type</Text>
        <Controller
          name="trainingType"
          control={control}
          rules={{ required: 'Training Type is required' }}
          render={({ field: { onBlur, onChange, value } }) => (
            <Picker
              selectedValue={selectedType}
              onValueChange={(value, itemIndex) => setSelectedType(value)}
              style={styles.textInput}
              onBlur={onBlur}
            >
              <Picker.Item label="G1" value="g1" />
              <Picker.Item label="G2" value="g2" />
              <Picker.Item label="Road Test" value="roadTest" />
            </Picker>
          )}
        />
        {errors.trainingType && (
          <Text style={{ color: 'red' }}>{errors.trainingType.message}</Text>
        )}
      </View> */}

      <View style={styles.inputContainer}>
        <Text style={styles.text}>Date and Time</Text>
        <Controller
          name="dateAndTime"
          control={control}
          rules={{ required: 'Date and Time is required' }}
          render={({ field: { onBlur, onChange, value } }) => (
            <TextInput
              style={styles.textInput}
              placeholder="Enter Date and time"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.dateAndTime && (
          <Text style={{ color: 'red' }}>{errors.dateAndTime.message}</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}>Exclude Days</Text>
        <Controller
          name="excludedDays"
          control={control}
          rules={{ required: 'At least one day must be excluded.' }}
          render={({ field: { onChange, value } }) => (
            <ExcludedDaysSelector selectedDays={value} onChange={onChange} />
          )}
        />
        {errors.excludedDays && (
          <Text style={{ color: 'red' }}>
            {errors.excludedDays.message as string}
          </Text>
        )}
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    position: 'relative',
    flex: 1,
    backgroundColor: '#F5F2EA',
  },
  title: {
    fontWeight: '600',
    fontSize: 32,
    marginVertical: 10,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 16,
    color: '#737377',
    marginBottom: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#2130E7',
    height: 56,
    width: 362,
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
  text: {
    color: '#625D52',
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 5,
  },
  textInput: {
    height: 44,
    width: 362,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    marginBottom: 10,
  },
});

export default PackageCreation;
