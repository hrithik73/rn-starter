import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { screenName } from '@src/constants/screen';
import Login from '@src/screens/auth/Login';
import SingUp from '@src/screens/auth/SignUp';
import Home from '@src/screens/home/Home';
import Query from '@src/screens/home/Query';
import Setting from '@src/screens/home/Setting';
import { AuthStackType, RootStackType } from '@src/types/navigation';

const Auth = createNativeStackNavigator<AuthStackType>();
const Tab = createBottomTabNavigator<RootStackType>();

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
          tabBarIcon: ({ ...props }) => <AntDesign name="home" {...props} />,
        }}
      />
      <Tab.Screen
        name={screenName.queryExample.name}
        component={Query}
        options={{
          headerTitle: screenName.queryExample.headerTitle,
          tabBarIcon: ({ ...props }) => (
            <AntDesign name="codesquare" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={screenName.setting.name}
        component={Setting}
        options={{
          tabBarIcon: ({ ...props }) => <AntDesign name="setting" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <>{isLoggedIn ? <HomeNavigator /> : <AuthNavigator />}</>;
};
export default MainNavigator;
