import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Home from './components/screens/Home';
import Livros from './components/screens/Livros';
import Filmes from './components/screens/Filmes';
import Series from './components/screens/Series';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Livros" component={Livros} />
          <Stack.Screen name="Series" component={Series} />
          <Stack.Screen name="Filmes" component={Filmes} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
