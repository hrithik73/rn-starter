import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackType } from '@src/types/navigation';
import { screenName } from '@src/constants/screen';
import Login from '@src/screens/auth/Login';
import SignUp from '@src/screens/auth/SignUp';

const Auth = createNativeStackNavigator<AuthStackType>();

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
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
