import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type Day = {
  label: string;
  value: string;
};

const daysOfWeek: Day[] = [
  { label: 'Sunday', value: 'Sun' },
  { label: 'Monday', value: 'Mon' },
  { label: 'Tuesday', value: 'Tue' },
  { label: 'Wednesday', value: 'Wed' },
  { label: 'Thursday', value: 'Thu' },
  { label: 'Friday', value: 'Fri' },
  { label: 'Saturday', value: 'Sat' },
];

interface ExcludedDaysSelectorProps {
  selectedDays?: string[]; // now optional with a default fallback
  onChange: (days: string[]) => void;
  headerText?: string;
  containerStyle?: ViewStyle;
  dayStyle?: ViewStyle;
  selectedDayStyle?: ViewStyle;
  dayTextStyle?: TextStyle;
  selectedDayTextStyle?: TextStyle;
}

const ExcludedDaysSelector: React.FC<ExcludedDaysSelectorProps> = ({
  selectedDays = [], // default to an empty array
  onChange,
  headerText = 'Exclude Days',
  containerStyle,
  dayStyle,
  selectedDayStyle,
  dayTextStyle,
  selectedDayTextStyle,
}) => {
  const toggleDay = (day: string) => {
    let updated: string[];
    if (selectedDays.includes(day)) {
      updated = selectedDays.filter((d) => d !== day);
    } else {
      updated = [...selectedDays, day];
    }
    onChange(updated);
  };

  return (
    <View style={containerStyle}>
      <View style={styles.daysContainer}>
        {daysOfWeek.map((day) => {
          const isSelected = selectedDays.includes(day.value);
          return (
            <TouchableOpacity
              key={day.value}
              style={[
                styles.dayItem,
                dayStyle,
                isSelected && [styles.dayItemSelected, selectedDayStyle],
              ]}
              onPress={() => toggleDay(day.value)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.dayText,
                  dayTextStyle,
                  isSelected && styles.selectedDayText,
                  isSelected && selectedDayTextStyle,
                ]}
              >
                {day.label}
              </Text>
              {isSelected && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#625D52',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dayItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '30%',
    paddingVertical: 8,
    paddingHorizontal: 6,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  dayItemSelected: {
    borderColor: '#2130E7',
    backgroundColor: '#E5E8FF',
  },
  dayText: {
    fontSize: 14,
    color: '#857F72',
  },
  selectedDayText: {
    fontWeight: '600',
    color: '#2130E7',
  },
  checkMark: {
    fontSize: 16,
    color: '#2130E7',
    marginLeft: 4,
  },
});

export default ExcludedDaysSelector;
