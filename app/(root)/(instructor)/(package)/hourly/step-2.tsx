import TopBar from '@/components/Top-Bar-2';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import React, { useCallback, useState } from 'react';
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

interface CreatePackage {
  trainingType: string;
  dateAndTime: string[];
  startDate: string;
  endDate: string;
  excludedDays: string[];
  scheduleStartTime: string;
  scheduleEndTime: string;
  breakTime: string;
}

const PackageCreation = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<CreatePackage>({
    defaultValues: {
      excludedDays: [],
    },
  });
  const [dates, setDates] = useState<Date[]>([]);
  const [open, setOpen] = useState(false);
  const [excludeDates, setExcludeDates] = useState<Date[]>([]);
  const [openExcludeDates, setOpenExcludeDates] = useState(false);

  // Separate state variables for each time picker
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [showBreakTimePicker, setShowBreakTimePicker] = useState(false);

  const onDismiss = useCallback(() => {
    setOpen(false);
  }, []);

  const onDismissExcludeDates = useCallback(() => {
    setOpenExcludeDates(false);
  }, []);

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

          {/* Range Dates Field */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Date and Time</Text>
            <TouchableOpacity
              style={[
                styles.textInput,
                { justifyContent: 'center', height: 44 },
              ]}
              onPress={() => setOpen(true)}
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
                        : 'Enter Date and Time'}
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
                        const start = startDate?.toISOString().split('T')[0];
                        const end = endDate?.toISOString().split('T')[0];
                        if (start && end) {
                          setValue('dateAndTime', [start, end]);
                          setValue('startDate', start);
                          setValue('endDate', end);
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

          {/* Schedule Start Time */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Schedule Start Time</Text>
            <Controller
              name="scheduleStartTime"
              control={control}
              rules={{ required: 'Schedule Start Time is required' }}
              render={({ field: { onChange, value } }) => (
                <TouchableOpacity
                  style={[
                    styles.textInput,
                    { justifyContent: 'center', height: 44 },
                  ]}
                  onPress={() => setShowStartTimePicker(true)}
                >
                  <Text style={{ color: value ? '#000' : '#aaa' }}>
                    {value ? value : 'Select Start Time'}
                  </Text>
                  {showStartTimePicker && (
                    <DateTimePicker
                      mode="time"
                      value={new Date()}
                      onChange={(event, selectedDate) => {
                        setShowStartTimePicker(false);
                        if (selectedDate) {
                          const formattedTime = selectedDate.toLocaleTimeString(
                            [],
                            {
                              hour: '2-digit',
                              minute: '2-digit',
                            }
                          );
                          onChange(formattedTime);
                        }
                      }}
                    />
                  )}
                </TouchableOpacity>
              )}
            />
            {errors.scheduleStartTime && (
              <Text style={styles.errorText}>
                {errors.scheduleStartTime.message}
              </Text>
            )}
          </View>

          {/* Schedule End Time */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Schedule End Time</Text>
            <Controller
              name="scheduleEndTime"
              control={control}
              rules={{ required: 'Schedule End Time is required' }}
              render={({ field: { onChange, value } }) => (
                <TouchableOpacity
                  style={[
                    styles.textInput,
                    { justifyContent: 'center', height: 44 },
                  ]}
                  onPress={() => setShowEndTimePicker(true)}
                >
                  <Text style={{ color: value ? '#000' : '#aaa' }}>
                    {value ? value : 'Select End Time'}
                  </Text>
                  {showEndTimePicker && (
                    <DateTimePicker
                      mode="time"
                      value={new Date()}
                      onChange={(event, selectedDate) => {
                        setShowEndTimePicker(false);
                        if (selectedDate) {
                          const formattedTime = selectedDate.toLocaleTimeString(
                            [],
                            {
                              hour: '2-digit',
                              minute: '2-digit',
                            }
                          );
                          onChange(formattedTime);
                        }
                      }}
                    />
                  )}
                </TouchableOpacity>
              )}
            />
            {errors.scheduleEndTime && (
              <Text style={styles.errorText}>
                {errors.scheduleEndTime.message}
              </Text>
            )}
          </View>

          {/* Break Time */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Break Time</Text>
            <Controller
              name="breakTime"
              control={control}
              rules={{ required: 'Break Time is required' }}
              render={({ field: { onChange, value } }) => (
                <TouchableOpacity
                  style={[
                    styles.textInput,
                    { justifyContent: 'center', height: 44 },
                  ]}
                  onPress={() => setShowBreakTimePicker(true)}
                >
                  <Text style={{ color: value ? '#000' : '#aaa' }}>
                    {value ? value : 'Select Break Time'}
                  </Text>
                  {showBreakTimePicker && (
                    <DateTimePicker
                      mode="time"
                      value={new Date()}
                      onChange={(event, selectedDate) => {
                        setShowBreakTimePicker(false);
                        if (selectedDate) {
                          const formattedTime = selectedDate.toLocaleTimeString(
                            [],
                            {
                              hour: '2-digit',
                              minute: '2-digit',
                            }
                          );
                          onChange(formattedTime);
                        }
                      }}
                    />
                  )}
                </TouchableOpacity>
              )}
            />
            {errors.breakTime && (
              <Text style={styles.errorText}>{errors.breakTime.message}</Text>
            )}
          </View>

          {/* Exclude Dates Field */}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Exclude Dates</Text>
            <TouchableOpacity
              style={[
                styles.textInput,
                { justifyContent: 'center', height: 44 },
              ]}
              onPress={() => setOpenExcludeDates(true)}
            >
              <Controller
                name="excludedDays"
                control={control}
                rules={{ required: 'Exclude dates are required' }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Text
                      style={{
                        color: value && value.length > 0 ? '#000' : '#aaa',
                      }}
                    >
                      {value && value.length > 0
                        ? value.join(', ')
                        : 'Enter Exclude Dates'}
                    </Text>
                    <DatePickerModal
                      locale="en"
                      mode="multiple"
                      visible={openExcludeDates}
                      onDismiss={onDismissExcludeDates}
                      dates={excludeDates}
                      onConfirm={({ dates: selectedDates }) => {
                        setOpenExcludeDates(false);
                        setExcludeDates(selectedDates);
                        const formattedDates = selectedDates.map(
                          (d) => d.toISOString().split('T')[0]
                        );
                        onChange(formattedDates);
                      }}
                      validRange={{
                        startDate: dates[0],
                        endDate: dates[1],
                      }}
                    />
                  </>
                )}
              />
              {errors.excludedDays && (
                <Text style={styles.errorText}>
                  {errors.excludedDays.message}
                </Text>
              )}
            </TouchableOpacity>
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
});

export default PackageCreation;
