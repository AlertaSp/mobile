import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './style';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';

const AlertaCadastro = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Ícone de fechar */}
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => navigation.navigate('Home')}
      >
        <Image
          source={require('../../assets/close.png')}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>

      {/* Fundo branco curvo separadamente */}
      <View style={styles.curvedBackground} />

      {/* Conteúdo por cima da curva */}
      <View style={styles.headerContent}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/stopIcon.png')}
          style={styles.stopIcon}
          resizeMode="contain"
        />
      </View>

      {/* Texto central */}
      <Text style={styles.alertText}>
        Cadastre-se ou faça{'\n'}o login{'\n'}para acessar!
      </Text>

      {/* Botões */}
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.accessButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.accessButtonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AlertaCadastro;
