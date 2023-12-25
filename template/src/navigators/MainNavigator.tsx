import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import {RootStackType} from '~/types/navigation';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import Setting from '~/screens/setting';

const Tab = createBottomTabNavigator<RootStackType>();

interface TabIconProps {
  name: string;
  color: string;
}

const TabIcon = ({name, color}: TabIconProps) => {
  // return <Ionicons name={name} size={BOTTOM_TAB_ICON_SIZE} color={color} />;
  return null;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Home'}
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <TabIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Setting'}
        component={Setting}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabIcon
              name={focused ? 'settings' : 'settings-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  // const {isLoggedIn} = useAppSelector(state => state.user);
  const isLoggedIn = true;

  return <>{isLoggedIn ? <TabNavigator /> : <AuthNavigator />}</>;
};
export default MainNavigator;
