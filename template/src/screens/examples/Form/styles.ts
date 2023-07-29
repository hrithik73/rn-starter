import { StyleSheet } from 'react-native';
import { AppTheme } from '~/theme/theme';

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
      color: theme.colors.text,
    },
  });

export default makeStyles;
