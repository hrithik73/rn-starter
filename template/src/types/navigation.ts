import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackType = {
  Home: undefined;
  Setting: undefined;
  QeuryExample: undefined;
};

export type AuthStackType = {
  Login: undefined;
  SignUp: undefined;
};

export type AuthStackNavigatorProps = NativeStackNavigationProp<AuthStackType>;

export type RootStackNavigatorProps = BottomTabNavigationProp<RootStackType>;
