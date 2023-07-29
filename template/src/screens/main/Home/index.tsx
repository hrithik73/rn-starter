import images from '@src/config/image';
import { useAppTheme } from '@src/theme/theme';
import React from 'react';
import { FlatList, Image, Linking, Pressable, Text, View } from 'react-native';

import makeStyles from './styles';
import { ExampleScreens } from '@src/constants/screen';
import { useNavigation } from '@react-navigation/native';

const ScreenCard = ({ item }: any) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation<any>();

  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate(item?.name);
      }}>
      <Text style={styles.cardTitle}>{item.name}</Text>
    </Pressable>
  );
};

const Home = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View style={styles.container}>
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
