import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker, {
  DateType,
  getDefaultStyles,
} from 'react-native-ui-datepicker';

export function CalendarInput() {
  const defaultStyles = getDefaultStyles();
  const [selected, setSelected] = useState<DateType>();
  const [modalVisible, setModalVisible] = useState(false);

  const handleDateChange = ({ date }: { date: DateType }) => {
    setSelected(date);
    setModalVisible(false);
  };

  return (
    <View>
      {/* Input Field */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.input}
      >
        <Text style={styles.inputText}>
          {selected
            ? (selected instanceof Date
                ? selected
                : selected instanceof Date
                ? selected
                : new Date(selected as string)
              ).toLocaleDateString()
            : 'Select Date'}
        </Text>
      </TouchableOpacity>

      {/* Modal with Date Picker */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <DateTimePicker
              mode="single"
              date={selected}
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
    color: '#857F72',
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
