import { AppTheme } from '@src/theme/theme';
import { StyleSheet } from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    menu: {
      flex: 1,
      margin: 10,
    },
    logoutBtn: {
      margin: 10,
      marginTop: 40,
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
  });

export default makeStyles;
