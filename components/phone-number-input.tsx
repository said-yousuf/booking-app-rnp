import React, { useRef, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const PhoneNumberInput = () => {
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <>
      <Text style={styles.label}>Phone Number</Text>

      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="US"
        layout="first"
        onChangeText={(text) => {
          setPhoneNumber(text);
        }}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  phoneContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    fontSize: 14,
    color: '#857F72',
  },
  textInput: {
    paddingVertical: 0,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#625D52',
    marginBottom: 5,
  },
});

export default PhoneNumberInput;
