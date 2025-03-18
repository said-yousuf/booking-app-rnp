import icons from './icons';
import images from './images';

interface OnboardingItem {
  id: string;
  image: any;
  title: string;
  description: string;
}

export const categories = [
  { title: 'Appointments', category: 'Appointments', icon: icons.clockIcon },
  { title: 'Completed', category: 'Completed', icon: icons.checkIcon },
  { title: 'Canceled', category: 'Canceled', icon: icons.closeIcon },
  { title: 'Upcoming ', category: 'Upcoming ', icon: icons.checkIcon },
];

export const onboardingData: OnboardingItem[] = [
  {
    id: '1',
    image: images.onboarding1,
    title: 'Meet your local driving instructor',
    description:
      'Connect with certified instructors, schedule lessons, and improve your driving ease',
  },
  {
    id: '2',
    image: images.onboarding2,
    title: 'Flexible scheduling',
    description:
      'Book lessons at times that work for you with our easy-to-use calendar',
  },
  {
    id: '3',
    image: images.onboarding3,
    title: 'Track your progress',
    description:
      'See how your skills improve with detailed feedback after each lesson',
  },
];

export const settingData = [
  { itemName: 'Language', itemIcon: icons.world },
  { itemName: 'Payment Methods', itemIcon: icons.walet },
  { itemName: 'Transaction', itemIcon: icons.coin },
  { itemName: 'Security Settings', itemIcon: icons.lock },
  { itemName: 'Vehicle Settings', itemIcon: icons.vehicle2 },
  { itemName: 'license Settings', itemIcon: icons.contact },
  { itemName: 'Notifications', itemIcon: icons.bell2 },
];
