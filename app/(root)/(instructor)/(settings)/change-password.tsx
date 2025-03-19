import SettingsTopBar from '@/components/Settings-Top-Bar';
import icons from '@/constants/icons';
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

interface ChangePasswordFormsData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const ChangePassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ChangePasswordFormsData>();
  const [showPassword, setShowPassword] = useState(true);

  const onSubmit = (data: ChangePasswordFormsData) => {
    console.log('FormData: ', data);
    router.navigate('/setting');
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <SettingsTopBar
            title="Change Password"
            description="your card must be registered to same postcodeyour use to verify your identity."
          />

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Old Password</Text>
            <Controller
              name="oldPassword"
              control={control}
              rules={{ required: 'Old Password is required.' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextInput
                    placeholder="Enter your Old Password"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={showPassword}
                  />
                  <TouchableOpacity
                    style={styles.showPassword}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Image source={icons.hideEye} style={styles.eyeIcon} />
                    ) : (
                      <Image source={icons.eye} style={styles.eyeIcon} />
                    )}
                  </TouchableOpacity>
                </View>
              )}
            />
            {errors.oldPassword && (
              <Text style={{ color: 'red' }}>{errors.oldPassword.message}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>New Password</Text>
            <Controller
              name="newPassword"
              control={control}
              rules={{ required: 'New Password is required.' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextInput
                    placeholder="Enter your New Password"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={showPassword}
                  />
                  <TouchableOpacity
                    style={styles.showPassword}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Image source={icons.hideEye} style={styles.eyeIcon} />
                    ) : (
                      <Image source={icons.eye} style={styles.eyeIcon} />
                    )}
                  </TouchableOpacity>
                </View>
              )}
            />
            {errors.newPassword && (
              <Text style={{ color: 'red' }}>{errors.newPassword.message}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{ required: 'Confirm Password is required.' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextInput
                    placeholder="Enter your Confirm Password"
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={showPassword}
                  />
                  <TouchableOpacity
                    style={styles.showPassword}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Image source={icons.hideEye} style={styles.eyeIcon} />
                    ) : (
                      <Image source={icons.eye} style={styles.eyeIcon} />
                    )}
                  </TouchableOpacity>
                </View>
              )}
            />
            {errors.confirmPassword && (
              <Text style={{ color: 'red' }}>
                {errors.confirmPassword.message}
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
    flex: 1,
    backgroundColor: '#F5F2EA',
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
  inputContainer: {
    marginVertical: 10,
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  showPassword: {
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

export default ChangePassword;
