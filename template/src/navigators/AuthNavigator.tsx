import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Login from '~/screens/auth/login';
import SignUp from '~/screens/auth/signup';
import {AuthStackType} from '~/types/navigation';

const Auth = createNativeStackNavigator<AuthStackType>();

const AuthNavigator = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name={'Login'}
        component={Login}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name={'SignUp'}
        component={SignUp}
        options={{headerShown: false}}
      />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
