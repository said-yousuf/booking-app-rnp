import icons from './icons';
import images from './images';

interface OnboardingItem {
  id: string;
  image: any; // Using 'any' for image source type - you can replace with more specific type
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
    image: images.onboarding2, // You'll need to add this to your images constant
    title: 'Flexible scheduling',
    description:
      'Book lessons at times that work for you with our easy-to-use calendar',
  },
  {
    id: '3',
    image: images.onboarding3, // You'll need to add this to your images constant
    title: 'Track your progress',
    description:
      'See how your skills improve with detailed feedback after each lesson',
  },
];
