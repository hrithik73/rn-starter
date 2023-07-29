import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ExampleScreens } from '~/constants/screen';
import { useAppTheme } from '~/theme/theme';
import makeStyles from './styles';

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
