import icons from '@/constants/icons';
import images from '@/constants/images';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { router } from 'expo-router';
import { useCallback, useMemo, useRef } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { height } = Dimensions.get('window');
  const snapPoints = useMemo(() => [height * 0.55], [height]);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleCloseModelPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <SafeAreaView style={styles.container}>
          <Image source={icons.logo} style={styles.logo} />
          <Image source={images.onboarding1} style={styles.onboardingImage} />
          <Text style={styles.onboardingHeading}>
            Meet your local driving instructor
          </Text>
          <Text style={styles.onboardingText}>
            Connect with certified instructors, schedule lessons, and improve
            your driving ease
          </Text>
          <TouchableOpacity
            style={styles.onboardingButton}
            onPress={handlePresentModalPress}
          >
            <Text style={styles.onboardingButtonText}>Get Started</Text>
          </TouchableOpacity>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
            enableDynamicSizing={true}
          >
            <BottomSheetView style={styles.contentContainer}>
              <BottomSheetView style={styles.bottomSheetHeader}>
                <Image
                  source={icons.logoWithoutText}
                  style={styles.logoWithoutText}
                />
                <TouchableOpacity onPress={() => handleCloseModelPress()}>
                  <Image source={icons.close} style={styles.closeIcon} />
                </TouchableOpacity>
              </BottomSheetView>

              <BottomSheetView style={{ marginVertical: 20 }}>
                <Text style={styles.bottomSheetTitle}>Get Started</Text>
                <Text style={styles.bottomSheetSubtitle}>
                  Connect with certified instructors, schedule lessons, and
                  improve your driving ease
                </Text>
              </BottomSheetView>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => router.navigate('/auth/path')}
                >
                  <Text style={styles.buttonText}>Continue with email</Text>
                </TouchableOpacity>
              </View>
              <BottomSheetView style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.appAuthButtons}>
                  <Image source={icons.apple} style={styles.appleIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.appAuthButtons}>
                  <Image source={icons.google} style={styles.googleIcon} />
                </TouchableOpacity>
              </BottomSheetView>
              <BottomSheetView style={styles.bottomSheetFooter}>
                <Text style={styles.bottomSheetFooterText}>
                  Already have an account?{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => router.navigate('/auth/sign-in')}
                >
                  <Text style={styles.bottomSheetFooterButtonText}>Log in</Text>
                </TouchableOpacity>
              </BottomSheetView>
            </BottomSheetView>
          </BottomSheetModal>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F2EA',
    alignItems: 'center',
    paddingHorizontal: 25,
    position: 'relative',
  },
  logo: {
    width: 143,
    height: 39,
    padding: 20,
    marginVertical: 40,
  },
  onboardingImage: {
    width: 173,
    height: 169,
    marginVertical: 50,
  },
  onboardingHeading: {
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 20,
  },
  onboardingText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    marginTop: 20,
  },
  onboardingButton: {
    position: 'absolute',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    bottom: 40,
    backgroundColor: '#2130E7',
    height: 49,
    width: 304,
    alignItems: 'center',
    borderRadius: 12,
  },
  onboardingButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20,
  },
  contentContainer: {
    paddingHorizontal: 30,
    flexDirection: 'column',
  },
  bottomSheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoWithoutText: {
    width: 59,
    height: 59,
  },
  closeIcon: {
    width: 32,
    height: 32,
  },
  bottomSheetTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 5,
  },
  bottomSheetSubtitle: {
    color: '#737377',
    fontSize: 16,
    fontWeight: '400',
  },
  buttonWrapper: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: '#2130E7',
    height: 53,
    width: 355,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20,
  },
  appleIcon: {
    width: 24,
    height: 24,
  },

  googleIcon: {
    width: 24,
    height: 24,
  },
  appAuthButtons: {
    width: 178,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAF9F7',
    marginRight: 4,
    borderRadius: 12,
  },
  bottomSheetFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    height: 53,
    width: 355,
    borderColor: '#D4D0C6',
    marginVertical: 20,
  },
  bottomSheetFooterText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#6F6F6F',
  },
  bottomSheetFooterButtonText: {
    color: '#2130E7',
  },
});
