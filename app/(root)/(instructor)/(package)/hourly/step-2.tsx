import ExcludedDaysSelector from '@/components/Days-Selector';
import TopBar from '@/components/Top-Bar-2';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import React, { useCallback, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DatePickerModal } from 'react-native-paper-dates';
import { CalendarDate } from 'react-native-paper-dates/lib/typescript/Date/Calendar';

// Update the interface to use an array for dateAndTime
interface CreatePackage {
  trainingType: string;
  dateAndTime: string[]; // changed to an array for multiple dates
  excludedDays: string[];
}

const PackageCreation = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<CreatePackage>();
  // Maintain selected dates as Date objects
  const [dates, setDates] = useState<Date[]>([]);
  // Control visibility of the DatePickerModal
  const [open, setOpen] = useState(false);

  // Closes the date picker modal
  const onDismiss = useCallback(() => {
    setOpen(false);
  }, []);

  // Update the onConfirm handler to work with CalendarDate types
  const onConfirm = ({
    startDate,
    endDate,
  }: {
    startDate: CalendarDate;
    endDate: CalendarDate;
  }) => {
    setDates([startDate as Date, endDate as Date]);
    setOpen(false);
  };

  const onSubmit = (data: CreatePackage) => {
    console.log('FormData: ', data);
    router.navigate('/hourly/step-2');
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <TopBar />
          <Text style={styles.title}>Create Packages</Text>
          <Text style={styles.subtitle}>Describe your package details</Text>

          {/* Training Type Picker */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Training Type</Text>
            <Controller
              name="trainingType"
              control={control}
              rules={{ required: 'Training Type is required' }}
              render={({ field: { onBlur, onChange, value } }) => (
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={value}
                    onValueChange={(val) => onChange(val)}
                    style={styles.picker}
                    onBlur={onBlur}
                  >
                    <Picker.Item label="Select Training Type" value="" />
                    <Picker.Item label="G1" value="g1" />
                    <Picker.Item label="G2" value="g2" />
                    <Picker.Item label="Road Test" value="roadTest" />
                  </Picker>
                </View>
              )}
            />
            {errors.trainingType && (
              <Text style={styles.errorText}>
                {errors.trainingType.message}
              </Text>
            )}
          </View>

          {/* Multiple Dates Field */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Date and Time</Text>
            <TouchableOpacity
              style={[
                styles.textInput,
                { justifyContent: 'center', height: 44 },
              ]}
              onPress={() => setOpen(true)} // ADD THIS
            >
              <Controller
                name="dateAndTime"
                control={control}
                rules={{ required: 'Date and Time is required' }}
                render={({ field: { value } }) => (
                  <View>
                    <Text
                      style={{
                        color: value && value.length > 0 ? '#000' : '#aaa',
                      }}
                    >
                      {value && value.length > 0
                        ? value.join(', ')
                        : 'Enter Date and time'}
                    </Text>
                    <DatePickerModal
                      disableStatusBarPadding
                      locale="en"
                      mode="range"
                      visible={open}
                      onDismiss={onDismiss}
                      startDate={dates[0]}
                      endDate={dates[1]}
                      onConfirm={({ startDate, endDate }) => {
                        // Convert dates to strings and update form state
                        const start = startDate?.toISOString().split('T')[0];
                        const end = endDate?.toISOString().split('T')[0];
                        if (start && end) {
                          setValue('dateAndTime', [start, end]);
                          setDates([startDate, endDate]);
                        }
                        setOpen(false);
                      }}
                    />
                  </View>
                )}
              />
              {errors.dateAndTime && (
                <Text style={styles.errorText}>
                  {errors.dateAndTime.message}
                </Text>
              )}
            </TouchableOpacity>
          </View>

          {/* Excluded Days Selector */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Exclude Days</Text>
            <Controller
              name="excludedDays"
              control={control}
              rules={{ required: 'At least one day must be excluded.' }}
              render={({ field: { onChange, value } }) => (
                <ExcludedDaysSelector
                  selectedDays={value}
                  onChange={onChange}
                />
              )}
            />
            {errors.excludedDays && (
              <Text style={styles.errorText}>
                {errors.excludedDays.message as string}
              </Text>
            )}
          </View>
        </ScrollView>

        {/* Continue Button */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F2EA',
    paddingHorizontal: 20,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80,
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
  text: {
    color: '#625D52',
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 5,
  },
  textInput: {
    height: 44,
    width: '100%',
    maxWidth: 362,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  pickerContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  picker: {
    height: 54,
    width: '100%',
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  buttonContainer: {
    backgroundColor: '#2130E7',
    height: 56,
    width: '100%',
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
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 3,
  },
  contentContainer: {
    paddingHorizontal: 30,
    flexDirection: 'column',
  },
  bottomSheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  closeIcon: {
    width: 32,
    height: 32,
  },
  bottomSheetHeaderText: {
    color: '#27241D',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default PackageCreation;
