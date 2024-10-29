import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Input from './src/components/inputs/input';
import { theme } from './theme';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Input title="Hello World" placeholder='Seu nome'/>
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
