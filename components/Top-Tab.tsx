import { NavigationProp } from '@react-navigation/native';
import { useNavigation, usePathname } from 'expo-router';
import { useFilterScreenChildren } from 'expo-router/build/layouts/withLayoutContext';
import { useSortedScreens } from 'expo-router/build/useScreens';
import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';

// Utility hook to measure view height
const useReactNativeViewHeight = () => {
  const [height, setHeight] = useState<number>(0);
  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setHeight(event.nativeEvent.layout.height);
  }, []);
  return { height, onLayout };
};

// Header component
function Header({ children }: { children: ReactNode }): ReactElement {
  return <>{children}</>;
}

// Screen component
interface ScreenProps {
  name: string;
  component: React.ComponentType;
}

const Screen: React.FC<ScreenProps> = () => null;

// Route type
type TabRoute = { key: string; title: string };

// TopTabs props
type TopTabsProps = Partial<React.ComponentProps<typeof Tabs.Container>> & {
  children: ReactNode;
};

// TopTabs component
export const TopTabs = ({ children, ...props }: TopTabsProps): ReactElement => {
  // Extract screens and other children
  const { screens, children: otherChildren } = useFilterScreenChildren(
    children,
    { isCustomNavigator: true }
  );

  // Find the header
  const header = otherChildren.find(
    (child): child is ReactElement =>
      React.isValidElement(child) && child.type === Header
  );

  if (!header) {
    throw new Error('TopTabs must have a TopTabs.Header child');
  }

  // Measure header height
  const { height, onLayout } = useReactNativeViewHeight();
  const renderHeader = useCallback(
    () => (
      <View pointerEvents="box-none" onLayout={onLayout}>
        {header}
      </View>
    ),
    [header, onLayout]
  );

  // Get sorted screens
  const sorted = useSortedScreens(screens ?? []) as ReactElement<ScreenProps>[];

  // Create routes for navigationState
  const routes: TabRoute[] = sorted.map((screen) => ({
    key: screen.props.name,
    title: screen.props.name,
  }));

  // Sync index with current route
  const pathname = usePathname();
  const tabName = pathname.split('/').pop() || '';
  const initialIndex = routes.findIndex((route) => route.key === tabName);
  const [index, setIndex] = useState<number>(
    initialIndex >= 0 ? initialIndex : 0
  );

  // Navigation handling
  const navigation = useNavigation<NavigationProp<any>>();
  const handleIndexChange = (newIndex: number) => {
    setIndex(newIndex);
    const route = routes[newIndex];
    navigation.navigate(route.key);
  };

  // Sync tab index with route changes
  useEffect(() => {
    const newIndex = routes.findIndex((route) => route.key === tabName);
    if (newIndex >= 0 && newIndex !== index) {
      setIndex(newIndex);
    }
  }, [pathname, routes, index]);

  return (
    <Tabs.Container<TabRoute>
      navigationState={{ index, routes }}
      onIndexChange={handleIndexChange}
      renderHeader={renderHeader}
      headerHeight={height}
      {...props}
    >
      {sorted.map((screen) => (
        <Tabs.Tab key={screen.props.name} name={screen.props.name}>
          <screen.props.component />
        </Tabs.Tab>
      ))}
    </Tabs.Container>
  );
};

// Attach Header and Screen as static properties
TopTabs.Header = Header;
TopTabs.Screen = Screen;
