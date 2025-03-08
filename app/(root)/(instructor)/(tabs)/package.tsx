import FullPackage from '@/components/Full-Package';
import HourlyPackage from '@/components/Hourly-Package';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

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

const PackageTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tab,
        tabBarIndicatorStyle: { backgroundColor: 'transparent' },
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
  );
};

export default PackageTabs;

const styles = StyleSheet.create({
  tabBar: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: '#CFCFDC',
    width: 362,
    height: 43,
    borderRadius: 32,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  tab: {
    width: 178,
    height: 39,
  },
  labelContainer: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 32,
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CFCFDC',
  },
  inactiveTab: {
    backgroundColor: '#CFCFDC',
    color: '#fff',
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
