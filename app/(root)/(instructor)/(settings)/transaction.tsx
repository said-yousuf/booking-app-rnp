import BackButton from '@/components/Back-Button';
import { TransactionCard } from '@/components/Card';
import icons from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Transaction = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <BackButton />
        <Text style={styles.title}>Transaction</Text>

        <View style={styles.inputContainer}>
          <Image source={icons.search} style={styles.icon} />
          <TextInput
            placeholder="Search for Transaction"
            style={styles.input}
          />
        </View>
      </View>

      <Text style={styles.day}>Today</Text>

      <TransactionCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F2EA',
    padding: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#FFF',
    width: 362,
    height: 48,
    borderRadius: 10,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    fontSize: 14,
    color: '#857F72',
    paddingLeft: 35,
  },
  inputContainer: {
    marginVertical: 10,
    position: 'relative',
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 10,
    top: 15,
    zIndex: 50,
  },
  day: {
    color: '#504A40',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Transaction;
