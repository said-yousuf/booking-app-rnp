import NoRequests from '@/components/No-Requests';
import RequestTopBar from '@/components/Request-Top-Bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Requests = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RequestTopBar />
      <NoRequests />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#F5F2EA',
  },
});

export default Requests;
