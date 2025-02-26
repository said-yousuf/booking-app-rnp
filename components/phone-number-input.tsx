import React, { useRef } from 'react';
import { StyleSheet, Text } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneNumberInput = ({ value, onChange }: PhoneNumberInputProps) => {
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <>
      <Text style={styles.label}>Phone Number</Text>
      <PhoneInput
        ref={phoneInput}
        defaultCode="US"
        layout="first"
        value={value}
        onChangeText={onChange}
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
