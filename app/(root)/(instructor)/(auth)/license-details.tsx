import BackButton from '@/components/Back-Button';
import DetailSection from '@/components/Detail-Section';
import ImagePickerComponent, { FileItem } from '@/components/Image-Picker';
import icons from '@/constants/icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';
import React, { useState } from 'react';
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

interface LicenseDetailsFormData {
  licenseNumber: string;
  issueDate: Date;
  expireDate: Date;
  photo: FileItem[];
}

const LicenseDetails = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LicenseDetailsFormData>();

  const [openIssueDate, setOpenIssueDate] = useState(false);
  const [openExpireDate, setOpenExpireDate] = useState(false);
  const [showIssueDatePicker, setShowIssueDatePicker] = useState(false);
  const [showExpireDatePicker, setShowExpireDatePicker] = useState(false);

  const onSubmit = (data: LicenseDetailsFormData) => {
    console.log('FormData: ', data);
    router.navigate('/(root)/(instructor)/(auth)/vehicle-details');
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <BackButton />
            <Text>3/5</Text>
            <Image source={icons.status} style={styles.iconStatus} />
          </View>

          {/* Title Section */}
          <DetailSection
            title="License Details"
            subtitle="Let’s Get you onboard! Tell us about yourself"
            icon="license"
          />

          <View style={styles.inputContainer}>
            <Text style={styles.label}>License Number</Text>
            <Controller
              name="licenseNumber"
              control={control}
              rules={{ required: 'License Number is required.' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your License Number"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.licenseNumber && (
              <Text style={{ color: 'red' }}>
                {errors.licenseNumber.message}
              </Text>
            )}
          </View>

          {/* Issue Date Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Issue Date</Text>
            <TouchableOpacity
              style={[styles.input, { justifyContent: 'center', height: 44 }]}
              onPress={() => setOpenIssueDate(true)}
            >
              <Controller
                name="issueDate"
                control={control}
                rules={{ required: 'Issue date is required.' }}
                render={({ field: { onChange, value } }) => (
                  <View>
                    <TouchableOpacity
                      onPress={() => setShowIssueDatePicker(true)}
                    >
                      <Text>
                        {value ? value.toDateString() : 'Select Date'}
                      </Text>
                    </TouchableOpacity>
                    {showIssueDatePicker && (
                      <DateTimePicker
                        value={value || new Date()}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                          setShowIssueDatePicker(false);
                          if (selectedDate) {
                            onChange(selectedDate);
                          }
                        }}
                      />
                    )}
                  </View>
                )}
              />
              {errors.issueDate && (
                <Text style={{ color: 'red' }}>{errors.issueDate.message}</Text>
              )}
            </TouchableOpacity>
          </View>

          {/* Expire Date Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Issue Date</Text>
            <TouchableOpacity
              style={[styles.input, { justifyContent: 'center', height: 44 }]}
              onPress={() => setOpenExpireDate(true)}
            >
              <Controller
                name="expireDate"
                control={control}
                rules={{ required: 'Expire date is required.' }}
                render={({ field: { onChange, value } }) => (
                  <View>
                    <TouchableOpacity
                      onPress={() => setShowExpireDatePicker(true)}
                    >
                      <Text>
                        {value ? value.toDateString() : 'Select Date'}
                      </Text>
                    </TouchableOpacity>
                    {showExpireDatePicker && (
                      <DateTimePicker
                        value={value || new Date()}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                          setShowExpireDatePicker(false);
                          if (selectedDate) {
                            onChange(selectedDate);
                          }
                        }}
                      />
                    )}
                  </View>
                )}
              />
              {errors.expireDate && (
                <Text style={{ color: 'red' }}>
                  {errors.expireDate.message}
                </Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>License Photo</Text>
            <Controller
              name="photo"
              control={control}
              rules={{ required: 'License photo is required.' }}
              render={({ field: { onChange, value } }) => (
                <ImagePickerComponent
                  value={value || []}
                  onChange={onChange}
                  fileType="document"
                />
              )}
            />
            {errors.photo && (
              <Text style={{ color: 'red' }}>{errors.photo.message}</Text>
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

export default LicenseDetails;
