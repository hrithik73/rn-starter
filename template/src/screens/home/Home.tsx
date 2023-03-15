import images from '@src/config/image';
import useTheme from '@src/hooks/useTheme';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Linking,
  Image,
} from 'react-native';

const REPO_URL = 'https://github.com/hrithik73/rn-starter';

const Home = () => {
  const theme = useTheme();
  const styles = makeStyles(theme.colors);

  const openRepoLink = () => {
    Linking.openURL(REPO_URL).catch(err =>
      console.error("Couldn't load page", err),
    );
  };
  return (
    <View style={styles.container}>
      <Image source={theme.dark ? images.logo : images.logo_dark} />
      <Text style={styles.subheading}>
        Please visit the README of this repo for more info
      </Text>
      <Pressable style={styles.linkContainer} onPress={openRepoLink}>
        <Text style={styles.linkText}>{REPO_URL}</Text>
      </Pressable>
    </View>
  );
};

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: colors.text,
      fontSize: 22,
      fontWeight: 'bold',
    },
    subheading: {
      color: colors.text,
      fontSize: 16,
      marginVertical: 15,
    },
    linkText: {
      color: 'blue',
    },
    linkContainer: {},
  });
export default Home;
