import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { BOTTOM_TAB_ICON_SIZE } from '@src/constants/appConstant';
import { screenName } from '@src/constants/screen';
import { useAppSelector } from '@src/redux/store';
import { RootStackType } from '@src/types/navigation';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import { Setting } from './routes';

const Tab = createBottomTabNavigator<RootStackType>();

interface TabIconProps {
  name: string;
  color: string;
}

const TabIcon = ({ name, color }: TabIconProps) => {
  return <Ionicons name={name} size={BOTTOM_TAB_ICON_SIZE} color={color} />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={screenName.home.name}
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screenName.setting.name}
        component={Setting}
        options={{
          tabBarIcon: ({ focused, color }) => (
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
  const { isLoggedIn } = useAppSelector(state => state.user);

  return <>{isLoggedIn ? <TabNavigator /> : <AuthNavigator />}</>;
};
export default MainNavigator;
