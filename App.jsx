import { StatusBar } from 'expo-status-bar';
// importando o NavigationContainer  para criar a navegação

import { NavigationContainer } from '@react-navigation/native';
// importando o createNativeStackNavigator para criar a navegação
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// home é a tela inicial
import Home from './src/screens/Home';
// contact é a tela de contato
import Contact from './src/screens/Contact';
// profile é a tela de perfil
import Profile from './src/screens/Profile';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Home}
          options={{
            title: 'Inicio',
            headerStyle: {
              backgroundColor: 'lightblue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            //headerShown: false,
          }
          }
        />
        <Stack.Screen name="Contato" component={Contact}
          options={{
            title: 'Contato',
            headerStyle: {
              backgroundColor: 'lightblue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerShown: 'false'
            //headerShown: false,
          }
          }
        />
        <Stack.Screen name="Perfil" component={Profile}
          options={{
            title: 'Contato',
            headerStyle: {
              backgroundColor: 'lightblue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerShown: 'false'
            //headerShown: false,
          }
          }
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
