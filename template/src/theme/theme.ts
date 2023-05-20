import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  useTheme,
} from 'react-native-paper';
import { darkColors, lightColors } from '@src/constants/colors';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    ...lightColors,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    ...darkColors,
  },
};

export type AppTheme = typeof CombinedDarkTheme;

export const useAppTheme = () => useTheme<AppTheme>();

export { CombinedDarkTheme as DarkTheme, CombinedDefaultTheme as DefaultTheme };
