import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

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
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
