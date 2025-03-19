import BackButton from '@/components/Back-Button';
import { PaymentCardDetail, TransactionCardDetail } from '@/components/Card';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const TransactionDetail = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.title}>Transaction Details</Text>
        <TransactionCardDetail />
        <View style={styles.paymentSection}>
          <Text style={styles.subtitle}>Payment Details</Text>
          <PaymentCardDetail />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F5F2EA',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F2EA',
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    color: '#504A40',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  paymentSection: {
    marginTop: 20,
  },
});

export default TransactionDetail;
