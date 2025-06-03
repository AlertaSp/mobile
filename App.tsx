import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { RootStackParamList } from "../alertaSp/src/navigation/RootStack";


// Páginas
import HomeScreen from './src/pages/home';
import LoginScreen from './src/pages/login';
import Cadastro from './src/pages/cadastro';
import AlertaCadastro from './src/pages/alertaCadastro';
import Alerta from './src/pages/alerta';
import AdicionarAlerta from './src/pages/adicionarAlerta';
import Denuncia from './src/pages/denuncia';
import FormularioDenuncia from './src/pages/formulario';
import Conscientizacao from './src/pages/conscientizacao';
import Clima from './src/pages/clima';
import Mapa from './src/pages/mapa';



const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync('#000');
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor="#3EA9E1" translucent={false} />

      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="AlertaCadastro" component={AlertaCadastro} />
        <Stack.Screen name="Alerta" component={Alerta} />
        <Stack.Screen name="AdicionarAlerta" component={AdicionarAlerta} />
        <Stack.Screen name="Denuncia" component={Denuncia} />
        <Stack.Screen name="FormularioDenuncia" component={FormularioDenuncia} />
        <Stack.Screen name="Conscientizacao" component={Conscientizacao} />
        <Stack.Screen name="Clima" component={Clima} />
        <Stack.Screen name="Mapa" component={Mapa} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
