import React from 'react';
import { Button as PaperButton, ButtonProps } from 'react-native-paper';

interface IButton extends Omit<ButtonProps, 'children'> {
  title: string;
  onPress: () => void;
  mode?: 'text' | 'outlined' | 'contained';
}
//TODO:- basic button, further customization can be done
const Button = ({ title, onPress, mode = 'contained', ...rest }: IButton) => {
  return (
    <PaperButton mode={mode} onPress={onPress} {...rest}>
      {title}
    </PaperButton>
  );
};

export default Button;
