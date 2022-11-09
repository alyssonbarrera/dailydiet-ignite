import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import * as NavigationBar from 'expo-navigation-bar';

import { Loading } from '@components/Loading';
import { Routes } from './src/routes';

import theme from './src/theme';

export default function App() {

  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  NavigationBar.setBackgroundColorAsync(theme.COLORS.GRAY_700);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        style='dark'
        backgroundColor='transparent'
        translucent
      />
      {
        fontsLoaded ? <Routes /> : <Loading />
      }
    </ThemeProvider>
  );
}
