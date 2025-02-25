import icons from '@/constants/icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { SafeAreaView } from 'react-native-safe-area-context';

const Otp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Image source={icons.back} style={styles.iconBack} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Verify your number</Text>
        <Text style={styles.subtitle}>
          Enter 5 digit code send to “ +44 555 667 “
        </Text>
      </View>

      <OtpInput
        numberOfDigits={6}
        focusColor="blue"
        autoFocus={false}
        hideStick={true}
        blurOnFilled={true}
        placeholder="-"
        disabled={false}
        type="numeric"
        secureTextEntry={false}
        focusStickBlinkingDuration={500}
        onFilled={(text) => console.log(`OTP is ${text}`)}
        textInputProps={{
          accessibilityLabel: 'One-Time Password',
        }}
        theme={{
          containerStyle: styles.otpContainer,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
        }}
      />
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => router.navigate('/(root)/(auth)/otp')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F2EA',
    flex: 1,
    padding: 20,
  },
  otpContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pinCodeContainer: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5, // Space between input boxes
  },
  pinCodeText: {
    fontSize: 16,
    fontWeight: '500',
  },
  iconBack: {
    width: 32,
    height: 32,
  },
  title: {
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 39,
    textAlign: 'center',
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
  },
  textContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    top: 482,
    backgroundColor: '#2130E7',
    height: 49,
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
});

export default Otp;
