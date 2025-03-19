import SettingsTopBar from '@/components/Settings-Top-Bar';
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

interface AddNewPaymentsFormsData {
  cardNumber: string;
  expireDate: Date;
  securityCode: string;
  nameOnCard: string;
}

const NewPayment = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<AddNewPaymentsFormsData>();
  const [showExpireDatePicker, setShowExpireDatePicker] = useState(false);
  const [openExpireDate, setOpenExpireDate] = useState(false);

  const onSubmit = (data: AddNewPaymentsFormsData) => {
    console.log('FormData: ', data);
    router.navigate('/setting');
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#F5F2EA' }}>
      <ScrollView>
        <View style={styles.container}>
          <SettingsTopBar
            title="Add new Payment"
            description="your card must be registered to same postcode your use to verify your identity."
          />

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Card Number</Text>
            <Controller
              name="cardNumber"
              control={control}
              rules={{ required: 'Card Number is required.' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextInput
                    placeholder="Enter your Card Number"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />

                  <Image
                    source={icons.paymentCardIcon}
                    style={styles.eyeIcon}
                  />
                </View>
              )}
            />
            {errors.cardNumber && (
              <Text style={{ color: 'red' }}>{errors.cardNumber.message}</Text>
            )}
          </View>

          <View style={styles.smallInputContainer}>
            {/* Expire Date Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Issue Date</Text>
              <TouchableOpacity
                style={[styles.input, { height: 48, width: 176 }]}
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
              <Text style={styles.label}>Security Code</Text>
              <Controller
                name="securityCode"
                control={control}
                rules={{ required: 'Security Code is required.' }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Enter your Security Code"
                    style={[styles.input, { height: 48, width: 176 }]}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.securityCode && (
                <Text style={{ color: 'red' }}>
                  {errors.securityCode.message}
                </Text>
              )}
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name On Card</Text>
            <Controller
              name="nameOnCard"
              control={control}
              rules={{ required: 'Name On Card is required.' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Enter your Name On Card"
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.nameOnCard && (
              <Text style={{ color: 'red' }}>{errors.nameOnCard.message}</Text>
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
    padding: 20,
  },
  content: {
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
    position: 'relative',
  },

  smallInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginVertical: 10,
  },
  eyeIcon: {
    width: 54,
    height: 18,
    position: 'absolute',
    zIndex: 50,
    right: 15,
    top: 15,
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    height: 56,
    width: '90%',
    maxWidth: 360,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,

    backgroundColor: '#2130E7',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
});

export default NewPayment;
