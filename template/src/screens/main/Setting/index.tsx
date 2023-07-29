import React from 'react';
import { Image, Linking, Pressable, Text, View } from 'react-native';
import { Divider, Switch } from 'react-native-paper';

import Button from '@src/components/Buttons';
import { toggleTheme } from '@src/redux/actions';
import { useAppDispatch, useAppSelector } from '@src/redux/store';
import { useAppTheme } from '@src/theme/theme';
import makeStyles from './styles';
import images from '@src/config/image';

const REPO_URL = 'https://github.com/hrithik73/rn-starter';

const Setting = () => {
  const dispatch = useAppDispatch();
  const { isDarkTheme } = useAppSelector(state => state.user);
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const openRepoLink = () => {
    Linking.openURL(REPO_URL).catch(err =>
      console.error("Couldn't load page", err),
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
        <Image source={theme.dark ? images.logo : images.logo_dark} />
        <Text style={styles.subheading}>
          Please visit the README of this repo for more info
        </Text>
        <Pressable style={styles.linkContainer} onPress={openRepoLink}>
          <Text style={styles.linkText}>{REPO_URL}</Text>
        </Pressable>
      </View>

      <Divider />

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
