import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';

import MainNavigator from '@src/navigations/MainNavigator';
import { store } from '@src/redux/store';
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
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <MainNavigator />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
