import icons from '@/constants/icons';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={icons.back} style={styles.iconBack} />
        </TouchableOpacity>
      </View>

      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>Sign in your account </Text>
        <Text style={styles.subtitle}>
          Enter your account credentials to sign in.{' '}
        </Text>
      </View>

      {/* Email and password Input */}
      <View style={styles.inputContainer}>
        <Image source={icons.mail} style={styles.mailImage} />
        <TextInput
          placeholder="Enter your email address"
          style={styles.input}
        />
        <Image source={icons.lock} style={styles.lockImage} />
        <TextInput placeholder="Enter your password" style={styles.input} />
      </View>

      {/* Login Button */}
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => router.navigate('/(root)/(auth)/sign-in')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueButtonContainer}
          onPress={() => router.navigate('/(root)/(auth)/sign-in')}
        >
          <Text style={styles.continueButtonText}>
            Continue with Phone Number
          </Text>
        </TouchableOpacity>
      </View>

      {/* Signup and forget password */}
      <View style={styles.footerContainer}>
        <TouchableOpacity>
          <Text style={styles.styledButton}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={styles.signupMessageLine}>
          <Text style={styles.signupTitle}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.styledButton}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F2EA',
    flex: 1,
    paddingHorizontal: 20,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 20,
  },
  iconBack: {
    width: 32,
    height: 32,
    marginLeft: 0,
  },
  titleSection: {
    marginVertical: 10,
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
  input: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    fontSize: 14,
    color: '#857F72',
    paddingLeft: 40,
  },
  inputContainer: {
    width: 362,
    marginBottom: 20,
    position: 'relative',
  },
  mailImage: {
    width: 20,
    height: 20,
    position: 'relative',
    zIndex: 50,
    top: 34,
    left: 10,
  },
  lockImage: {
    width: 20,
    height: 20,
    position: 'relative',
    zIndex: 50,
    top: 34,
    left: 10,
  },
  buttonContainer: {
    backgroundColor: '#2130E7',
    height: 49,
    width: 362,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20,
  },
  continueButtonContainer: {
    height: 49,
    width: 362,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderColor: '#625D52',
    marginBottom: 10,
    borderWidth: 1,
  },
  continueButtonText: {
    textAlign: 'center',
    color: '#625D52',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20,
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  styledButton: {
    fontWeight: '600',
    fontSize: 16,
    color: '#1742FB',
  },
  signupMessageLine: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signupTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SignIn;
