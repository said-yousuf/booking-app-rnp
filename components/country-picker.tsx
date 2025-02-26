import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';

interface CountryPickerProps {
  value: string;
  onChange: (value: string) => void;
}

const CountryPickerComponent = ({ value, onChange }: CountryPickerProps) => {
  const [show, setShow] = useState(false);

  return (
    <View>
      {/* Button styled similar to your input field */}
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={styles.pickerButton}
      >
        <Text style={styles.pickerButtonText}>
          {value ? value : 'Select Country'}
        </Text>
      </TouchableOpacity>

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
          onChange(item.name.en); // Pass selected country name to onChange
          setShow(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pickerButton: {
    width: '100%',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    justifyContent: 'center',
  },
  pickerButtonText: {
    fontSize: 14,
    color: '#857F72',
  },
  modal: {
    maxHeight: '60%',
    backgroundColor: '#FFF',
    borderRadius: 8,
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

export default CountryPickerComponent;
