import images from '@src/config/image';
import { useAppTheme } from '@src/theme/theme';
import React from 'react';
import { FlatList, Image, Linking, Pressable, Text, View } from 'react-native';

import { API_URL } from '@env';
import makeStyles from './styles';
import { ExampleScreens } from '@src/constants/screen';
import { Divider } from 'react-native-paper';

const REPO_URL = 'https://github.com/hrithik73/rn-starter';

const ScreenCard = ({ item }: any) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.name}</Text>
    </View>
  );
};

const Home = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

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
      <Text style={styles.heading}>
        List of Examples to implemented in the app
      </Text>
      <FlatList
        style={styles.exampleContainer}
        data={ExampleScreens}
        renderItem={({ item }) => {
          return <ScreenCard item={item} />;
        }}
      />
    </View>
  );
};

export default Home;
