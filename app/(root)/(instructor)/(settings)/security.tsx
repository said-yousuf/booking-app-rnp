import { SecuritySettingCard } from '@/components/Card';
import SettingsTopBar from '@/components/Settings-Top-Bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const security = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SettingsTopBar
          title="Security Settings"
          description="your card must be registered to same postcode your use to verify your identity."
        />
        <SecuritySettingCard />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
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
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    height: 56,
    width: 338,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderColor: '#DF1C41',
    borderWidth: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: '#DF1C41',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
});

export default security;
