import { Text, View } from 'react-native';
import { Switch } from 'react-native-paper';
// import { useTheme } from '@react-navigation/native';

import { toggleTheme } from '@src/redux/actions';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import useTheme from '@src/hooks/useTheme';

const Login = () => {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector(state => state.theme);
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
      }}>
      <Switch
        value={isDark}
        onValueChange={() => {
          dispatch(toggleTheme());
        }}
      />
      <Text style={{ color: theme.colors.text }}>Switch Theme</Text>
    </View>
  );
};
export default Login;
