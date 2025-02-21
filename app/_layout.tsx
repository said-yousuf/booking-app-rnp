import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    interBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterExtraBold: require('./assets/fonts/Inter-ExtraBold.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
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
