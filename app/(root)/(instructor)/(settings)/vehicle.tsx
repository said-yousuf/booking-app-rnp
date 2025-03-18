import { VehicleInfoCard } from '@/components/Card';
import SettingsTopBar from '@/components/Settings-Top-Bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Vehicle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SettingsTopBar
        title="Vehicle Settings"
        description="your card must be registered to same postcode your use to verify your identity."
      />

      <VehicleInfoCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F2EA',
    padding: 20,
  },
});

export default Vehicle;
