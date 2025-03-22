import NoMessages from '@/components/No-Messages';
import TopBar from '@/components/Top-Bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Messages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar label="Messages" />
      <Text style={styles.headerTitle}>Conversations</Text>
      <NoMessages />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#F5F2EA',
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#73716E',
    marginTop: 10,
  },
});

export default Messages;
