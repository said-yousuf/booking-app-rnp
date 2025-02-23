import icons from '@/constants/icons';
import images from '@/constants/images';
import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
  const showBottomSheet = () => {
    return (
      <BottomSheet index={1} snapPoints={snapPoints}>
        <Text>Hello</Text>
      </BottomSheet>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={icons.logo} style={styles.logo} />
      <Image source={images.onboarding1} style={styles.onboarding_image} />
      <Text style={styles.onboarding_heading}>
        Meet your local driving instructor 
      </Text>
      <Text style={styles.onboarding_text}>
        Connect with certified instructors, schedule lessons, and improve your
        driving ease
      </Text>

      <TouchableOpacity
        style={styles.onboarding_button}
        onPress={() => showBottomSheet()}
      >
        <Text style={styles.onboarding_button_text}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F2EA',
    alignItems: 'center',
    padding: 20,
    position: 'relative',
  },
  logo: {
    width: 143,
    height: 39,
    padding: 20,
    marginBlock: 40,
  },
  onboarding_image: {
    width: 173,
    height: 169,
    marginBlock: 50,
  },
  onboarding_heading: {
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    fontWeight: 500,
    marginInline: 45,
    marginTop: 20,
  },
  onboarding_text: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    marginTop: 20,
    marginInline: 20,
  },
  onboarding_button: {
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
  onboarding_button_text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
    fontWeight: 600,
    lineHeight: 20,
  },
});
