import { StyleSheet } from 'react-native';
import { AppTheme } from '~/theme/theme';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {},
    cardContainer: {
      padding: 25,
      margin: 5,
      borderRadius: 15,
      backgroundColor: '#c1c1c1c1',
    },
    name: {
      color: theme.colors.text,
      fontSize: 15,
      fontWeight: '500',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loaderText: {
      fontSize: 20,
    },
  });

export default makeStyles;
