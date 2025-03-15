import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enGB, registerTranslation } from 'react-native-paper-dates';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    InterRegular: require('@/assets/fonts/InterDisplay-Regular.ttf'),
    interBold: require('@/assets/fonts/InterDisplay-Bold.ttf'),
    InterMedium: require('@/assets/fonts/InterDisplay-Medium.ttf'),
    InterSemiBold: require('@/assets/fonts/InterDisplay-SemiBold.ttf'),
    InterExtraBold: require('@/assets/fonts/InterDisplay-ExtraBold.ttf'),
    InterLight: require('@/assets/fonts/InterDisplay-Light.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      registerTranslation('en-GB', enGB);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
