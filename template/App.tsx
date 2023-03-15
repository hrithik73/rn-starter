import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import MainNavigator from '@src/navigations/MainNavigator';
import { persistor, store } from '@src/redux/store';
import { DarkTheme, DefaultTheme } from '@src/theme/theme';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? DarkTheme : DefaultTheme;

  useEffect(() => {
    // Using redux store outside provider
    const storeListner = store.subscribe(() => {
      setIsDarkTheme(store.getState().theme.isDark);
    });
    return storeListner;
  });

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <StatusBar
              backgroundColor={isDarkTheme ? 'black' : 'white'}
              barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
            />
            <MainNavigator />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
