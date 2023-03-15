import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Switch } from 'react-native-paper';

import { toggleTheme } from '@src/redux/actions';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import useTheme from '@src/hooks/useTheme';

const Setting = () => {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector(state => state.theme);
  const theme = useTheme();
  const styles = makeStyles(theme.colors);

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.row}>
          <Switch
            value={isDark}
            onValueChange={() => {
              dispatch(toggleTheme());
            }}
          />
          <Text style={{ color: theme.colors.text }}>Switch Theme</Text>
        </View>
      </View>
    </View>
  );
};

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    menu: {
      flex: 1,
      margin: 10,
    },
    row: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      borderWidth: 0.2,
      borderRadius: 10,
      borderColor: colors.text,
    },
  });
export default Setting;
