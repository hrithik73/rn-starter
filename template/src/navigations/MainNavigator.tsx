import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { screenName } from '@src/constants/screen';
import { useAppSelector } from '@src/redux/store';
import Login from '@src/screens/auth/Login';
import SingUp from '@src/screens/auth/SignUp';
import Home from '@src/screens/home/Home';
import Query from '@src/screens/home/Query';
import Setting from '@src/screens/home/Setting';
import { AuthStackType, RootStackType } from '@src/types/navigation';
import { BOTTOM_TAB_ICON_SIZE } from '@src/constants/appConstant';

const Auth = createNativeStackNavigator<AuthStackType>();
const Tab = createBottomTabNavigator<RootStackType>();

interface TabIconProps {
  name: string;
  color: string;
}

const TabIcon = ({ name, color }: TabIconProps) => {
  return <Ionicons name={name} size={BOTTOM_TAB_ICON_SIZE} color={color} />;
};

const AuthNavigator = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name={screenName.login.name}
        component={Login}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name={screenName.signUp.name}
        component={SingUp}
        options={{ headerShown: false }}
      />
    </Auth.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={screenName.home.name}
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screenName.queryExample.name}
        component={Query}
        options={{
          headerTitle: screenName.queryExample.headerTitle,
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

  return <>{isLoggedIn ? <HomeNavigator /> : <AuthNavigator />}</>;
};
export default MainNavigator;
