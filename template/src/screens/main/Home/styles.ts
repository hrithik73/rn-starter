import { AppTheme } from '@src/theme/theme';
import { StyleSheet } from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: theme.colors.text,
      fontSize: 22,
      fontWeight: 'bold',
    },
    subheading: {
      color: theme.colors.text,
      fontSize: 16,
      marginVertical: 15,
    },
    linkText: {
      color: 'blue',
    },
    linkContainer: {},
  });

export default makeStyles;
