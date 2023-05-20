import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
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

import Button from '@src/components/Buttons';
import Input from '@src/components/Input';
import images from '@src/config/image';
import { AuthStackNavigatorProps } from '@src/types/navigation';
import { useAppTheme } from '@src/theme/theme';

const SignUp = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme.colors);
  const [passVisible, setPassVisible] = useState(false);

  const navigation = useNavigation<AuthStackNavigatorProps>();

  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const loginHandler = (data: any) => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Image source={theme.dark ? images.logo : images.logo_dark} />
      <Input
        name="name"
        control={control}
        placeholder="Name"
        rules={{
          required: {
            value: true,
            message: 'Name is required',
          },
        }}
      />
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
            message: 'Invalid email address',
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
      <Button title="SignUp" onPress={handleSubmit(loginHandler)} />
      <View style={styles.signUpContainer}>
        <Text>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUpText}>Login</Text>
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
      gap: 5,
    },
    signUpText: {
      color: 'blue',
    },
  });

export default SignUp;
