import { AppTheme } from '@src/theme/theme';
import { StyleSheet } from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    heading: {
      color: theme.colors.text,
      fontSize: 18,
      fontWeight: '600',
      marginVertical: 20,
      marginBottom: 20,
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
    exampleContainer: {
      width: '100%',
    },
    cardContainer: {
      height: 50,
      marginVertical: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      // width: '100%',
      backgroundColor: theme.colors.secondaryContainer,
    },
    cardTitle: {
      fontSize: 16,
      color: theme.colors.text,
    },
  });

export default makeStyles;
