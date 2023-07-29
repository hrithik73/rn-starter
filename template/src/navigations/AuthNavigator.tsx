import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { screenName } from '~/constants/screen';
import Login from '~/screens/auth/Login';
import SignUp from '~/screens/auth/SignUp';
import { AuthStackType } from '~/types/navigation';

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
