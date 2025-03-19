import icons from '@/constants/icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Badge from './Badge';

interface PackageCardProps {
  title?: string;
  price?: string;
  description?: string;
  schedule?: string;
  location?: string;
  packageType?: string;
  onEdit?: () => void;
  onSecondAction?: () => void;
  secondActionLabel?: string;
}

interface BookingCardProps {
  sessionStatus: 'completed' | 'pending' | 'cancelled' | string;
  studentName: string;
  studentRole: string;
  sessionDate: string;
  sessionTitle: string;
  location: string;
  onPress?: () => void;
}

export const BookingCard: React.FC<BookingCardProps> = ({
  sessionStatus = 'pending',
  studentName = 'Unknown Student',
  studentRole = 'Role Not Provided',
  sessionDate = 'Date Unavailable',
  sessionTitle = 'No Title Available',
  location = 'Location Not Set',
  onPress = () => console.log('Booking card pressed'),
}) => {
  return (
    <View style={styles.bookingCardContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.sessionHeaderContainer}>
          <Text style={styles.sessionText}>Session Details</Text>
          <Badge status={sessionStatus} />
        </View>

        <View style={styles.detailContainer}>
          <Image source={icons.personIcon} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{studentName}</Text>
            <Text style={styles.subtitle}>{studentRole}</Text>
          </View>
        </View>

        <View style={styles.detailContainer}>
          <Image source={icons.steerIcon} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{sessionDate}</Text>
            <Text style={styles.subtitle}>Session Date</Text>
          </View>
        </View>

        <View style={styles.detailContainer}>
          <Image source={icons.searchIcon} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{sessionTitle}</Text>
            <Text style={styles.subtitle}>Session Title</Text>
          </View>
        </View>

        <View style={styles.detailContainer}>
          <Image source={icons.locationIcon} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{location}</Text>
            <Text style={styles.subtitle}>Location</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const PackageCard: React.FC<PackageCardProps> = ({
  title = 'Road Test',
  price = '$60/Hr',
  description = 'Traffic rules and regulations, Hazard Awareness, and Basics of vehicle...',
  schedule = 'Dec 4, 2024 6:00 PM to 9:00 PM',
  location = 'Main Street 238, Selkirk, Manitoba, R1A 1S2, Canada',
  packageType = 'Road Test',
  onEdit,
  onSecondAction,
  secondActionLabel = 'Schedules',
}) => {
  return (
    <View style={styles.hourlyPackageContainer}>
      <View style={styles.hourlyPackageHeader}>
        <Text style={styles.hourlyPackageTitle}>{title}</Text>
        <Text style={styles.hourlyPackagePrice}>{price}</Text>
      </View>
      <Text style={styles.hourlyPackageDescription}>{description}</Text>
      <View style={styles.hourlyPackageDetail}>
        <Image source={icons.scheduleIcon} style={styles.hourlyPackageIcon} />
        <Text style={styles.hourlyPackageDetailDescription}>{schedule}</Text>
      </View>
      <View style={styles.hourlyPackageDetail}>
        <Image source={icons.locationIcon} style={styles.hourlyPackageIcon} />
        <Text style={styles.hourlyPackageDetailDescription}>{location}</Text>
      </View>
      <View style={styles.hourlyPackageDetail}>
        <Image source={icons.steerIcon} style={styles.hourlyPackageIcon} />
        <Text style={styles.hourlyPackageDetailDescription}>{packageType}</Text>
      </View>

      <View style={styles.hourlyPackageButtonContainer}>
        <TouchableOpacity style={styles.hourlyPackageButton} onPress={onEdit}>
          <Text style={styles.hourlyPackageButtonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.hourlyPackageButton}
          onPress={onSecondAction}
        >
          <Text style={styles.hourlyPackageButtonText}>
            {secondActionLabel}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const VehicleInfoCard = () => {
  return (
    <View style={styles.vehicleInfoContainer}>
      <View style={styles.vehicleInfoHeader}>
        <Text style={styles.vehicleInfoHeaderText}>Vehicle Information</Text>
        <Badge status="Approved" />
      </View>

      <View style={styles.vehicleInfoData}>
        <Image source={icons.settingIcon} style={styles.vehicleInfoDataIcon} />
        <Text style={styles.vehicleInfoDataText}>Toyota Corolla</Text>
      </View>

      <View style={styles.vehicleInfoData}>
        <Image source={icons.locationIcon} style={styles.vehicleInfoDataIcon} />
        <Text style={styles.vehicleInfoDataText}>1243124314</Text>
      </View>

      <View style={styles.vehicleInfoData}>
        <Image source={icons.steerIcon} style={styles.vehicleInfoDataIcon} />
        <Text style={styles.vehicleInfoDataText}>ABC231</Text>
      </View>
    </View>
  );
};

export const SecuritySettingCard = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View>
      <TouchableOpacity
        style={styles.securitySettingHeader}
        onPress={() => router.navigate('/change-password')}
      >
        <Image source={icons.lock2} style={styles.securitySettingHeaderIcon} />
        <Text style={styles.securitySettingHeaderText}>Change Password</Text>
      </TouchableOpacity>
      <View style={styles.securitySettingMain}>
        <View style={styles.securitySettingMainContent}>
          <Image source={icons.lock2} style={styles.securitySettingIcon} />
          <Text style={styles.securitySettingMainText}>
            Two-Factor Authentication
          </Text>
        </View>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export const PaymentSettingCard = () => {
  return (
    <View style={styles.paymentSettingContainer}>
      <View style={styles.paymentSettingHeaderContainer}>
        <View style={styles.paymentSettingLeftSide}>
          <Image source={icons.visaIcon} style={styles.visaIcon} />
          <View>
            <Text style={styles.paymentSettingTitle}>Yennefer Clasky</Text>
            <Text style={styles.paymentSettingSubtitle}>
              0112345678-October 15, 2025
            </Text>
          </View>
        </View>
        <Badge status="Approved" />
      </View>

      <TouchableOpacity style={styles.paymentSettingAddContainer}>
        <Image source={icons.add} style={styles.paymentSettingAddIcon} />
        <Text style={styles.paymentSettingAddText}>New Payment Method</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sessionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    paddingVertical: 20,
    marginBottom: 20,
  },
  sessionText: {
    fontWeight: '500',
    fontSize: 16,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#8E8E93',
  },
  icon: {
    width: 16,
    height: 16,
  },
  detailContainer: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: 10,
  },
  bookingCardContainer: {
    marginTop: 20,
    marginBottom: 10,
    height: 330,
    width: 362,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    backgroundColor: 'white',
    borderRadius: 12,
  },

  //Package Card

  hourlyPackageContainer: {
    height: 332,
    width: 362,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
  },
  hourlyPackageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  hourlyPackageTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: '#080705',
  },
  hourlyPackagePrice: {
    borderColor: '#E8E6E1',
    borderWidth: 1,
    padding: 5,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 700,
  },
  hourlyPackageDescription: {
    fontSize: 14,
    fontWeight: 400,
    color: '#504A40',
  },
  hourlyPackageDetail: {
    flexDirection: 'row',
    marginTop: 20,
  },
  hourlyPackageDetailDescription: {
    color: '#504A40',
    fontWeight: 500,
    fontSize: 14,
  },
  hourlyPackageIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  hourlyPackageButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  hourlyPackageButton: {
    backgroundColor: '#fafafa',
    borderColor: '#DEE2E5',
    borderRadius: 8,
    borderWidth: 1,
    width: 151,
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hourlyPackageButtonText: {
    fontWeight: 400,
    fontSize: 14,
  },

  //Vehicle Card
  vehicleInfoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  vehicleInfoContainer: {
    width: 362,
    height: 206,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
  },
  vehicleInfoData: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  vehicleInfoDataIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  vehicleInfoDataText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#504A40',
  },
  vehicleInfoHeaderText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#080705',
  },

  //Security Setting Card
  securitySettingHeader: {
    flexDirection: 'row',
    width: 362,
    height: 56,
    backgroundColor: '#fff',
    borderColor: '#D3CEC4',
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
  },
  securitySettingIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  securitySettingHeaderIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
    color: '#504A40',
  },
  securitySettingHeaderText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#504A40',
  },
  securitySettingMain: {
    flexDirection: 'row',
    width: 362,
    height: 56,
    backgroundColor: '#fff',
    borderColor: '#D3CEC4',
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    justifyContent: 'space-between',
  },
  securitySettingMainText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#080705',
  },
  securitySettingMainContent: {
    flexDirection: 'row',
  },

  //Payment Card Setting
  paymentSettingContainer: {},
  paymentSettingHeaderContainer: {
    flexDirection: 'row',
    height: 64,
    width: 362,
    borderColor: '#D3CEC4',
    backgroundColor: '#fff',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  visaIcon: {
    height: 30,
    width: 40,
    marginRight: 10,
  },
  paymentSettingTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#423D33',
  },
  paymentSettingSubtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#625D52',
  },
  paymentSettingAddContainer: {
    borderColor: '#D3CEC4',
    backgroundColor: '#fff',
    height: 50,
    width: 362,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  paymentSettingAddIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  paymentSettingAddText: {
    color: '#27241D',
    fontSize: 14,
    fontWeight: '600',
  },
  paymentSettingLeftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
