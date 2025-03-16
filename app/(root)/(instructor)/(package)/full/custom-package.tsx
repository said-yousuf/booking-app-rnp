import PackageTypesSelector from '@/components/Package-Types-Selector';
import TopBar from '@/components/Top-Bar-2';
import { router } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface CustomPackageFormsData {
  packageType: string[];
  name: string;
  description: string;
  price: number;
  sessionLocation: string;
  duration: string;
}

const CustomPackage = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<CustomPackageFormsData>();

  const onSubmit = (data: CustomPackageFormsData) => {
    console.log('FormData: ', data);
    router.navigate('/package');
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <TopBar />
          <Text style={styles.title}>Create Package</Text>
          <Text style={styles.subtitle}>Describe your package details</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Package Type</Text>
            <Controller
              name="packageType"
              control={control}
              rules={{ required: 'Package Type is required' }}
              render={({ field: { onBlur, onChange, value } }) => (
                <PackageTypesSelector
                  selectedTypes={value || []}
                  onChange={onChange}
                />
              )}
            />

            {errors.packageType && (
              <Text style={{ color: 'red' }}>{errors.packageType.message}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Name</Text>
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Name is required' }}
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  placeholder="Road test session"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value?.toString()}
                  style={styles.textInput}
                />
              )}
            />
            {errors.name && (
              <Text style={{ color: 'red' }}>{errors.name.message}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Description</Text>
            <Controller
              name="description"
              control={control}
              rules={{ required: 'Description is required' }}
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter you vehicle number"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            {errors.description && (
              <Text style={{ color: 'red' }}>{errors.description.message}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Price</Text>
            <Controller
              name="price"
              control={control}
              rules={{ required: 'Price is required' }}
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder="48 Afn"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value?.toString()}
                />
              )}
            />
            {errors.price && (
              <Text style={{ color: 'red' }}>{errors.price.message}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Session Location</Text>
            <Controller
              name="sessionLocation"
              control={control}
              rules={{ required: 'Session Location is required' }}
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder="Main Street 238, Selkirk, Manitoba, R1A 1S2, Canada"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value?.toString()}
                />
              )}
            />
            {errors.sessionLocation && (
              <Text style={{ color: 'red' }}>
                {errors.sessionLocation.message}
              </Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Duration</Text>
            <Controller
              name="duration"
              control={control}
              rules={{ required: 'Duration is required' }}
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  style={styles.textInput}
                  placeholder="1 Hour"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value?.toString()}
                />
              )}
            />
            {errors.duration && (
              <Text style={{ color: 'red' }}>{errors.duration.message}</Text>
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
    paddingLeft: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
});

export default CustomPackage;
