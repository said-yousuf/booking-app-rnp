import FullPackage from '@/components/lesson-package/Full-Package';
import HourlyPackage from '@/components/lesson-package/Hourly-Package';
import TopBar from '@/components/Top-Bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');
const TAB_WIDTH = 362;

type CustomLabelProps = {
  focused: boolean;
  children: string;
};

const CustomLabel: React.FC<CustomLabelProps> = ({ focused, children }) => (
  <View
    style={[
      styles.labelContainer,
      focused ? styles.activeTab : styles.inactiveTab,
    ]}
  >
    <Text
      style={[styles.label, focused ? styles.activeText : styles.inactiveText]}
    >
      {children}
    </Text>
  </View>
);

const Package = () => {
  return (
    <View style={styles.container}>
      <TopBar label="Packages" />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarItemStyle: styles.tab,
          tabBarPressColor: 'transparent', // Removes ripple effect on press
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
          },
          tabBarLabel: ({ focused, children }) => (
            <CustomLabel focused={focused}>{children as string}</CustomLabel>
          ),
        }}
      >
        <Tab.Screen
          name="HourlyPackage"
          component={HourlyPackage}
          options={{ title: 'Hourly Package' }}
        />
        <Tab.Screen
          name="FullPackage"
          component={FullPackage}
          options={{ title: 'Full Package' }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Package;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  tabBar: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: '#CFCFDC',
    borderRadius: 32,
    overflow: 'hidden',
    width: TAB_WIDTH,
    alignSelf: 'center',
    marginHorizontal: 'auto',
    alignItems: 'center',
    height: 43,
  },
  tab: {
    padding: 0,
    width: TAB_WIDTH / 2,
  },
  labelContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CFCFDC',
    width: 200,
    borderRadius: 32,
    height: 43,
    marginBottom: 5,
  },
  inactiveTab: {
    backgroundColor: '#CFCFDC',
    height: 43,
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  activeText: {
    color: '#000',
    fontWeight: 'bold',
  },
  inactiveText: {
    color: '#fff',
  },
});
