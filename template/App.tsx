import React, { useEffect, useState } from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';

import MainNavigator from '@src/navigations/MainNavigator';
import { store } from '@src/redux/store';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
};
const CombinedDarkTheme = { ...PaperDarkTheme, ...NavigationDarkTheme };

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

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
