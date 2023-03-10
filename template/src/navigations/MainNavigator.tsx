import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenName } from '@src/constants/screen';
import Login from '@src/screens/auth/Login';
import SingUp from '@src/screens/auth/SignUp';

const Auth = createNativeStackNavigator();

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

const MainNavigator = () => {
  return <AuthNavigator />;
};
export default MainNavigator;
