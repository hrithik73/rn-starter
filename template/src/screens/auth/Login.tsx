import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TextInput } from 'react-native-paper';

import Button from '~/components/Buttons';
import Input from '~/components/Input';
import images from '~/config/image';
import { login } from '~/redux/actions';
import { useAppDispatch } from '~/redux/store';
import { useAppTheme } from '~/theme/theme';
import { AuthStackNavigatorProps } from '~/types/navigation';

const Login = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme.colors);
  const [passVisible, setPassVisible] = useState(false);
  const dispatch = useAppDispatch();

  const navigation = useNavigation<AuthStackNavigatorProps>();

  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const loginHandler = (data: any) => {
    console.log(data);
    dispatch(login());
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Image source={theme.dark ? images.logo : images.logo_dark} />
      <Input
        autoCapitalize="none"
        name="email"
        control={control}
        placeholder="Email"
        rules={{
          required: {
            value: true,
            message: 'Email is required',
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        }}
      />
      <Input
        name="pass"
        secureTextEntry={!passVisible}
        control={control}
        placeholder="Password"
        right={
          <TextInput.Icon
            icon={passVisible ? 'eye-off' : 'eye'}
            onPress={() => {
              setPassVisible(!passVisible);
            }}
          />
        }
        rules={{
          required: {
            value: true,
            message: 'Password is required',
          },
          minLength: {
            value: 8,
            message: 'Password must be atleast 8 charaters',
          },
        }}
      />
      <Button title="Login" onPress={handleSubmit(loginHandler)} />
      <View style={styles.signUpContainer}>
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>SignUp</Text>
        </Pressable>
      </View>
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
    signUpContainer: {
      flexDirection: 'row',
      marginVertical: 15,
      gap: 10,
    },
    signUpText: {
      color: 'blue',
    },
  });

export default Login;
