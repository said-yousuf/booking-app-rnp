import icons from '@/constants/icons';
import { Tabs } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View style={styles.container}>
    <Image
      source={icon}
      tintColor={focused ? '#0061ff' : '#666876'}
      resizeMode="contain"
      style={styles.iconImage}
    />
    <Text
      style={[
        styles.tabIconText,
        focused ? styles.tabIconTextFocused : styles.tabIconTextNotFocused,
      ]}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'relative',
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Home" focused={focused} icon={icons.homeIcon} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              title="Messages"
              focused={focused}
              icon={icons.messageIcon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="requests"
        options={{
          title: 'Requests',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              title="Requests"
              focused={focused}
              icon={icons.requestIcon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="package"
        options={{
          title: 'Packages',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              title="Packages"
              focused={focused}
              icon={icons.packageIcon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              title="Settings"
              focused={focused}
              icon={icons.settingIcon}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 6,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  tabIconText: {
    fontSize: 12,
    width: '100%',
    textAlign: 'center',
    marginTop: 2,
    fontWeight: '500',
  },
  tabIconTextFocused: {
    color: '#0061ff',
  },
  tabIconTextNotFocused: {
    color: '#666876',
  },
});

export default TabsLayout;
