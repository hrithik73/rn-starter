import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, View } from 'react-native';

const Login = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ color: 'black' }}>Hello</Text>
      <AntDesign name="home" size={30} color={'black'} />
    </View>
  );
};
export default Login;
