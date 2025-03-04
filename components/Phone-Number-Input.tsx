import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';

interface PhoneNumberInputProps {
  countryCode: string;
  phoneNumber: string;
  onChangeCountryCode: (value: string) => void;
  onChangePhoneNumber: (value: string) => void;
}

const PhoneNumberInput = ({
  countryCode,
  phoneNumber,
  onChangeCountryCode,
  onChangePhoneNumber,
}: PhoneNumberInputProps) => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      {/* Country Code Picker */}
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={styles.countryCodeButton}
      >
        <Text style={styles.countryCodeText}>
          {countryCode ? countryCode : '+Code'}
        </Text>
      </TouchableOpacity>

      {/* Phone Number Input */}
      <TextInput
        style={styles.phoneInput}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={onChangePhoneNumber}
      />

      {/* Country Picker Modal */}
      <CountryPicker
        show={show}
        lang={'en'}
        inputPlaceholder="Search for a country..."
        searchMessage="No results found"
        enableModalAvoiding={true}
        style={{
          modal: styles.modal,
          textInput: styles.textInput,
          itemsList: styles.itemsList,
          countryButtonStyles: styles.countryButton,
        }}
        pickerButtonOnPress={(item) => {
          onChangeCountryCode(item.dial_code); // Update country code with the dial code
          setShow(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D1D1D1',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    height: 60,
  },
  countryCodeButton: {
    paddingRight: 10,
    borderRightWidth: 1,
    borderColor: '#D1D1D1',
    justifyContent: 'center',
  },
  countryCodeText: {
    fontSize: 14,
    color: '#857F72',
  },
  phoneInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 14,
    color: '#857F72',
  },
  modal: {
    maxHeight: '60%',
    backgroundColor: '#FFF',
  },
  textInput: {
    height: 50,
    borderRadius: 8,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#857F72',
    margin: 10,
  },
  itemsList: {
    paddingHorizontal: 10,
  },
  countryButton: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#D1D1D1',
    paddingHorizontal: 10,
  },
});

export default PhoneNumberInput;
