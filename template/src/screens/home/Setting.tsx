import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Switch } from 'react-native-paper';

import { toggleTheme } from '@src/redux/actions';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { AppTheme, useAppTheme } from '@src/theme/theme';
import Button from '@src/components/Buttons';

const Setting = () => {
  const dispatch = useAppDispatch();
  const { isDarkTheme } = useAppSelector(state => state.user);
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.row}>
          <Switch
            value={isDarkTheme}
            onValueChange={() => {
              dispatch(toggleTheme());
            }}
          />
          <Text style={{ color: theme.colors.text }}>Switch Theme</Text>
        </View>
        <Button title="Logout" style={styles.logoutBtn} onPress={() => {}} />
      </View>
    </View>
  );
};

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
export default Setting;
