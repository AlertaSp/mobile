import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';

// Páginas
import HomeScreen from './src/pages/home';
import LoginScreen from './src/pages/login';
import Cadastro from './src/pages/cadastro';
import AlertaCadastro from './src/pages/alertaCadastro';

// Tipagem das rotas
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Cadastro: undefined;
  AlertaCadastro: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync('#000'); // cor de fundo do status bar Android
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor="#3EA9E1" translucent={false} />

      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="AlertaCadastro" component={AlertaCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
