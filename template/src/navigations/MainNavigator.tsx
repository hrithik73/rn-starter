import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@src/screens/auth/Login';

const Auth = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen name="Login" component={Login} />
    </Auth.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};
export default MainNavigator;
