import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View } from 'react-native';
import Input from './src/components/inputs/input';
import { theme } from './theme';

export default function App() {
  const [loaded, error] = useFonts({
    'Title': require('./assets/fonts/Title.ttf'),
    'Text': require('./assets/fonts/Text.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Input title="Nome completo" placeholder='Seu nome'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.light.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
