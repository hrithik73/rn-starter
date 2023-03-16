import React from 'react';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import useTheme from '@src/hooks/useTheme';

const URL = 'https://swapi.dev/api/people';

const getPeople = async (url: string = URL) => {
  return axios.get(url);
};

const QueryExample = () => {
  const theme = useTheme();
  const styles = makeStyles(theme.colors);

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery('people', ({ pageParam }) => getPeople(pageParam), {
      getNextPageParam: (lastPage, page) => {
        if (lastPage.data.next) {
          return lastPage.data.next;
        }
      },
    });
  console.log(data?.pages[0].data.results);

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

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {},
    cardContainer: {
      padding: 25,
      margin: 5,
      borderRadius: 15,
      backgroundColor: '#c1c1c1c1',
    },
    name: {
      color: colors.text,
      fontSize: 15,
      fontWeight: '500',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loaderText: {
      fontSize: 20,
    },
  });

export default QueryExample;
