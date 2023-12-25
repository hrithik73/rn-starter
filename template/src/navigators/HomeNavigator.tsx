import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '~/screens/home';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={'HomeScreen'}
        component={Home}
        options={{
          headerTitle: '',
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
