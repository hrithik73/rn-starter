import { StyleSheet } from 'react-native';
import { AppTheme } from '~/theme/theme';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '100%',
    },
    errorText: {
      color: 'red',
    },
  });

export default makeStyles;
