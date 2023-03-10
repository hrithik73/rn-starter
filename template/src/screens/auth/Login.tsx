import { toggleTheme } from '@src/redux/actions';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { Text, View } from 'react-native';
import { Switch, useTheme } from 'react-native-paper';

const Login = () => {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector(state => state.theme);
  const theme = useTheme();
  console.log(theme.colors.primary);

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
      <Text style={{ color: theme.colors.primary }}>Switch Theme</Text>
    </View>
  );
};
export default Login;
