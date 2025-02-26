import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker, {
  DateType,
  getDefaultStyles,
} from 'react-native-ui-datepicker';

interface CalendarInputProps {
  value?: DateType;
  onChange: (date: DateType) => void;
}

export function CalendarInput({ value, onChange }: CalendarInputProps) {
  const defaultStyles = getDefaultStyles();
  const [modalVisible, setModalVisible] = useState(false);

  const handleDateChange = ({ date }: { date: DateType }) => {
    onChange(date);
    setModalVisible(false);
  };

  // Always provide a valid date to DateTimePicker
  const currentDate = value
    ? value instanceof Date
      ? value
      : new Date(value as string)
    : new Date();

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.input}
      >
        <Text style={styles.inputText}>
          {value ? currentDate.toLocaleDateString() : 'Select Date'}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <DateTimePicker
              mode="single"
              date={currentDate}
              onChange={handleDateChange}
              styles={defaultStyles}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: '#D1D1D1',
    borderWidth: 1,
  },
  inputText: {
    fontSize: 14,
    color: '#857F72',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
});
