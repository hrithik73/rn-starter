import { Controller, ControllerProps } from 'react-hook-form';
import { View } from 'react-native';
import { HelperText, TextInput, TextInputProps } from 'react-native-paper';
import makeStyles from './styles';
import { useAppTheme } from '@src/theme/theme';

type InputProps = {
  name: string;
  placeholder: string;
  control: any;
} & TextInputProps &
  Omit<ControllerProps, 'render'>;

const Input = ({ name, placeholder, control, ...rest }: InputProps) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme.colors);

  return (
    <Controller
      {...rest}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error, isDirty, isTouched },
      }) => {
        return (
          <View style={styles.container}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              {...rest}
            />
            {error?.message && (
              <HelperText style={styles.errorText} type="error">
                {error?.message}
              </HelperText>
            )}
          </View>
        );
      }}
      name={name}
      control={control}
    />
  );
};

export default Input;
