import * as Location from 'expo-location';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ value, onChange }) => {
  const [loading, setLoading] = useState(false);

  const fetchLocation = async () => {
    try {
      setLoading(true);
      // Request foreground permissions for location
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission Denied',
          'Permission to access location was denied.'
        );
        return;
      }

      // Get the current position
      const location = await Location.getCurrentPositionAsync({});

      const addresses = await Location.reverseGeocodeAsync(location.coords);
      if (addresses && addresses.length > 0) {
        const address = addresses[0];
        const locationString = `${address.street || ''} ${address.city || ''} ${
          address.region || ''
        } ${address.country || ''}`.trim();
        onChange(locationString);
      } else {
        onChange(`${location.coords.latitude}, ${location.coords.longitude}`);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch location.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your location"
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
      {loading ? (
        <ActivityIndicator style={styles.loader} />
      ) : (
        <Button title="Use Current Location" onPress={fetchLocation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  loader: {
    marginVertical: 10,
  },
});

export default LocationInput;
