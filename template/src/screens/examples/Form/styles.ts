import { AppTheme } from '@src/theme/theme';
import { StyleSheet } from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
      alignItems: 'center',
    },
    heading: {
      fontSize: 18,
      fontWeight: '600',
    },
    input: {},
  });

export default makeStyles;
