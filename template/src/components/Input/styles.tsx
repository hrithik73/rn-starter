import { StyleSheet } from 'react-native';

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '80%',
    },
    errorText: {
      color: 'red',
    },
  });

export default makeStyles;
