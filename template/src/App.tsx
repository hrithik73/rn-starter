/**
 * Import necessary dependencies and components
 */
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';

// App level configuration
import { DarkTheme, DefaultTheme } from './theme/theme';
import { persistor, store } from './redux/store';
import MainNavigator from './navigations/MainNavigator';

/**
 * Main App component
 */
const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? DarkTheme : DefaultTheme;

  const queryClient = new QueryClient();

  useEffect(() => {
    // Subscribe to the redux store to listen for changes in the theme
    const storeListener = store.subscribe(() => {
      setIsDarkTheme(store.getState().user.isDarkTheme);
    });

    // Cleanup the subscription when component unmounts
    return () => {
      storeListener();
    };
  });

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
              <StatusBar
                backgroundColor={isDarkTheme ? 'black' : 'white'}
                barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
              />
              <MainNavigator />
            </NavigationContainer>
          </PaperProvider>
        </QueryClientProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
