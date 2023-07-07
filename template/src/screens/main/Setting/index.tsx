import React from 'react';
import { Text, View } from 'react-native';
import { Switch } from 'react-native-paper';

import Button from '@src/components/Buttons';
import { toggleTheme } from '@src/redux/actions';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { useAppTheme } from '@src/theme/theme';
import makeStyles from './styles';

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

export default Setting;
