import axios from 'axios';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { useInfiniteQuery } from 'react-query';

import { SWAPI_URL } from '~/constants/appConstant';
import { useAppTheme } from '~/theme/theme';
import makeStyles from './styles';

const getPeople = async (url: string = SWAPI_URL) => {
  return axios.get(url);
};

const List = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery('people', ({ pageParam }) => getPeople(pageParam), {
      getNextPageParam: lastPage => {
        if (lastPage.data.next) {
          return lastPage.data.next;
        }
      },
    });

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        data={data?.pages.map(page => page?.data?.results).flat()}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        ListFooterComponent={() => {
          return (
            <>
              {isFetchingNextPage && (
                <ActivityIndicator
                  style={{ margin: 20 }}
                  animating={true}
                  color={MD2Colors.red800}
                />
              )}
            </>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardContainer}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default List;
