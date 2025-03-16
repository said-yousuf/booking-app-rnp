import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type PackageType = {
  label: string;
  value: string;
};

const packageTypes: PackageType[] = [
  { label: 'Road Test', value: 'roadTest' },
  { label: 'G1', value: 'g1' },
  { label: 'G2', value: 'g2' },
];

interface PackageTypeSelectorProps {
  selectedTypes?: string[];
  onChange: (types: string[]) => void;
  headerText?: string;
  containerStyle?: ViewStyle;
  typeStyle?: ViewStyle;
  selectedTypeStyle?: ViewStyle;
  typeTextStyle?: TextStyle;
  selectedTypeTextStyle?: TextStyle;
}

const PackageTypesSelector: React.FC<PackageTypeSelectorProps> = ({
  selectedTypes = [],
  onChange,
  headerText = 'Select Package Type',
  containerStyle,
  typeStyle,
  selectedTypeStyle,
  typeTextStyle,
  selectedTypeTextStyle,
}) => {
  const toggleType = (type: string) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    onChange(updatedTypes);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.headerText}>{headerText}</Text>
      <View style={styles.typesContainer}>
        {packageTypes.map((type) => {
          const isSelected = selectedTypes.includes(type.value);
          return (
            <TouchableOpacity
              key={type.value}
              style={[
                styles.typeItem,
                typeStyle,
                isSelected && [styles.typeItemSelected, selectedTypeStyle],
              ]}
              onPress={() => toggleType(type.value)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.typeText,
                  typeTextStyle,
                  isSelected && styles.selectedTypeText,
                  isSelected && selectedTypeTextStyle,
                ]}
              >
                {type.label}
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
  container: {
    // Optional container styles if needed
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#625D52',
  },
  typesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  typeItem: {
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
  typeItemSelected: {
    borderColor: '#2130E7',
    backgroundColor: '#E5E8FF',
  },
  typeText: {
    fontSize: 14,
    color: '#857F72',
  },
  selectedTypeText: {
    fontWeight: '600',
    color: '#2130E7',
  },
  checkMark: {
    fontSize: 16,
    color: '#2130E7',
    marginLeft: 4,
  },
});

export default PackageTypesSelector;
