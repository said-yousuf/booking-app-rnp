import ExcludedDaysSelector from '@/components/Days-Selector';
import TopBar from '@/components/Top-Bar-2';
import icons from '@/constants/icons';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import React, { useCallback, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Image,
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
  dateAndTime: string;
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
  const [dates, setDates] = React.useState();
  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback((params: any) => {
    setOpen(false);
    setDates(params.dates);
    console.log('[on-change-multi]', params);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleCloseModelPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const onSubmit = (data: CreatePackage) => {
    console.log('FormData: ', data);
    router.navigate('/hourly/step-2');
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <TopBar />
          <Text style={styles.title}>Create Packages</Text>
          <Text style={styles.subtitle}>Describe your package details</Text>

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

          <View style={styles.inputContainer}>
            <Text style={styles.text}>Date and Time</Text>
            <TouchableOpacity
              onPress={handlePresentModalPress}
              style={[
                styles.textInput,
                { justifyContent: 'center', height: 44 },
              ]}
            >
              <Controller
                name="dateAndTime"
                control={control}
                rules={{ required: 'Date and Time is required' }}
                render={({ field: { value } }) => (
                  <Text style={{ color: value ? '#000' : '#aaa' }}>
                    {value || 'Enter Date and time'}
                  </Text>
                )}
              />
              {errors.dateAndTime && (
                <Text style={styles.errorText}>
                  {errors.dateAndTime.message}
                </Text>
              )}
            </TouchableOpacity>
          </View>

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

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
        enableDynamicSizing={true}
      >
        <BottomSheetView style={styles.contentContainer}>
          <BottomSheetView style={styles.bottomSheetHeader}>
            <Text style={styles.bottomSheetHeaderText}>Schedule a Date</Text>
            <TouchableOpacity onPress={() => handleCloseModelPress()}>
              <Image source={icons.close} style={styles.closeIcon} />
            </TouchableOpacity>
          </BottomSheetView>
          <BottomSheetView>
            <DatePickerModal
              disableStatusBarPadding
              locale="en"
              mode="multiple"
              visible={open}
              onDismiss={onDismiss}
              dates={dates}
              onConfirm={onConfirm}
            />
          </BottomSheetView>
        </BottomSheetView>
      </BottomSheetModal>
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
