import { useAppSelector } from '@src/redux/store';
import { DarkTheme, DefaultTheme } from '@src/theme/theme';

const useTheme = () => {
  const { isDark } = useAppSelector(store => store.theme);
  return isDark ? DarkTheme : DefaultTheme;
};

export default useTheme;
