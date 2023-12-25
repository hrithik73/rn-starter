import React from 'react';
import {Image, Linking, Pressable, Text, View, StyleSheet} from 'react-native';
import {Divider, Switch} from 'react-native-paper';

import images from '~/assets/images/images';
import Button from '~/components/ui/button';
import {logout, toggleTheme} from '~/redux/slices/user';
import {useAppDispatch, useAppSelector} from '~/redux/store';
import {AppTheme, useAppTheme} from '~/theme';

const REPO_URL = 'https://github.com/hrithik73/rn-starter';

const Setting = () => {
  const dispatch = useAppDispatch();
  const {isDarkTheme} = useAppSelector(state => state.user);
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const openRepoLink = () => {
    Linking.openURL(REPO_URL).catch(err =>
      console.error("Couldn't load page", err),
    );
  };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20, marginBottom: 10}}>
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
          <Text style={{color: theme.colors.text}}>Switch Theme</Text>
        </View>
        <Button
          title="Logout"
          customStyles={styles.logoutBtn}
          onPress={() => {
            dispatch(logout());
          }}
        />
      </View>
    </View>
  );
};

export default Setting;

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
      alignSelf: 'center',
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
