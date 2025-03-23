import { onboardingData } from '@/constants/data';
import icons from '@/constants/icons';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { router } from 'expo-router';
import React, { useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';

interface OnboardingItem {
  id: string;
  image: any;
  title: string;
  description: string;
}

type CarouselRef = React.RefObject<any>;

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null) as CarouselRef;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { height, width } = Dimensions.get('window');

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleCloseModelPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const renderItem = useCallback(({ item }: { item: OnboardingItem }) => {
    return (
      <View style={styles.onboardingSlide}>
        <Image
          source={item.image}
          style={styles.onboardingImage}
          resizeMode="contain"
        />
        <Text style={styles.onboardingHeading}>{item.title}</Text>
        <Text style={styles.onboardingText}>{item.description}</Text>
      </View>
    );
  }, []);

  const goToNextSlide = useCallback(() => {
    if (currentIndex < onboardingData.length - 1 && carouselRef.current) {
      carouselRef.current.scrollTo({ index: currentIndex + 1, animated: true });
    } else {
      handlePresentModalPress();
    }
  }, [currentIndex, handlePresentModalPress]);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={icons.logo} style={styles.logo} />

      <View style={styles.carouselContainer}>
        <Carousel
          ref={carouselRef}
          width={width - 50}
          height={450}
          data={onboardingData}
          renderItem={renderItem}
          onSnapToItem={(index) => setCurrentIndex(index)}
          loop={false}
        />
      </View>

      {/* Pagination Indicators */}
      <View style={styles.paginationContainer}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              {
                backgroundColor: index === currentIndex ? '#2130E7' : '#D4D0C6',
              },
            ]}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.onboardingButton} onPress={goToNextSlide}>
        <Text style={styles.onboardingButtonText}>
          {currentIndex === onboardingData.length - 1
            ? 'Get Started'
            : 'Continue'}
        </Text>
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
              Connect with certified instructors, schedule lessons, and improve
              your driving ease
            </Text>
          </BottomSheetView>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                router.navigate('/auth/path');
                handleCloseModelPress();
              }}
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
              onPress={() => {
                router.navigate('/auth/sign-in');
                handleCloseModelPress();
              }}
            >
              <Text style={styles.bottomSheetFooterButtonText}>Log in</Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheetView>
      </BottomSheetModal>
    </SafeAreaView>
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
    marginVertical: 30,
  },
  carouselContainer: {
    height: 450,
    width: '100%',
    marginTop: 50,
  },
  onboardingSlide: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  onboardingImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 30,
  },
  onboardingHeading: {
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  onboardingText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    color: '#737377',
    paddingHorizontal: 10,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
  },
  onboardingButton: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#2130E7',
    height: 49,
    width: 304,
    alignItems: 'center',
    justifyContent: 'center',
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

export default App;
