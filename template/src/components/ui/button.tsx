import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {ViewStyle} from 'react-native';
import {AppTheme, useAppTheme} from '~/theme';

interface IButton {
  title: string;
  onPress: () => void;
  customStyles?: ViewStyle;
}

//TODO:- basic button, further customization can be done
const Button = ({title, onPress, customStyles}: IButton) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <Pressable style={[styles.container, customStyles]} onPress={onPress}>
      <Text style={styles.tittle}>{title}</Text>
    </Pressable>
  );
};
const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      height: 50,
      backgroundColor: theme.colors.primary,
      width: '80%',
      margin: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tittle: {
      color: theme.colors.white,
      fontWeight: '400',
      fontSize: 15,
    },
  });
export default Button;
