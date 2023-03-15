import Button from '@src/components/Buttons';
import Input from '@src/components/Input';
import images from '@src/config/image';
import useTheme from '@src/hooks/useTheme';
import { useForm } from 'react-hook-form';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Login = () => {
  const theme = useTheme();
  const styles = makeStyles(theme.colors);

  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Image source={theme.dark ? images.logo : images.logo_dark} />
      <Input
        name="email"
        control={control}
        placeholder="Email"
        rules={{
          required: {
            value: true,
            message: 'Email is required',
          },
        }}
      />
      <Input
        name="pass"
        control={control}
        placeholder="Password"
        rules={{
          required: {
            value: true,
            message: 'Password is required',
          },
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          console.log('Login');
        }}
      />
    </KeyboardAvoidingView>
  );
};

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: colors.text,
    },
  });

export default Login;
