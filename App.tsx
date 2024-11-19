import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigation from './src/navigation/AppNavigation';
import AuthProvider from './src/context/authContext';

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

  // Verificação inicial: enquanto as fontes não estão carregadas e não há erro, retorna 'null' para não renderizar nada
  if (!loaded && !error) {
    return null;
  }

  // Renderiza a navegação principal do aplicativo após o carregamento das fontes
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}
