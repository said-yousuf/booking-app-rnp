import { PaymentSettingCard } from '@/components/Card';
import SettingsTopBar from '@/components/Settings-Top-Bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const Payment = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SettingsTopBar
          title="Payment Methods"
          description="your card must be registered to same postcodeyour use to verify your identity."
        />
        <PaymentSettingCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F2EA',
    padding: 20,
    position: 'relative',
  },
  content: {
    flex: 1,
  },
});

export default Payment;
