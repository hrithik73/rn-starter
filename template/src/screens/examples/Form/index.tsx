import { useAppTheme } from '@src/theme/theme';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import Input from '@src/components/Input';
import makeStyles from './styles';

const Form = () => {
  const { control } = useForm({ mode: 'onBlur' });

  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Personal Info Form</Text>
      <Input
        control={control}
        name="firstName"
        placeholder="First Name"
        underlineColor="none"
        activeUnderlineColor="white"
      />
      <Input
        control={control}
        name="lastName"
        placeholder="Last Name"
        underlineColor="white"
      />
      <Input
        control={control}
        name="email"
        placeholder="Email"
        underlineColor="white"
        keyboardType="email-address"
      />
    </View>
  );
};
export default Form;
