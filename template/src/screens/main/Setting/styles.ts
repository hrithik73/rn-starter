import { AppTheme } from '@src/theme/theme';
import { StyleSheet } from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    menu: {
      margin: 10,
      marginTop: 30,
    },
    logoutBtn: {
      margin: 10,
      marginTop: 20,
    },
    row: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      borderWidth: 0.2,
      borderRadius: 10,
      borderColor: theme.colors.text,
    },
    subheading: {
      color: theme.colors.text,
      fontSize: 16,
      marginVertical: 15,
    },
    linkText: {
      color: 'blue',
      textDecorationStyle: 'solid',
      textDecorationLine: 'underline',
      // textDecorationColor: 'red',
    },
    linkContainer: {},
  });

export default makeStyles;
