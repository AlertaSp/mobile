import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import styles from './style';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';

import { auth } from '../../services/firebaseConfig';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    auth
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        navigation.navigate('Home'); 
      })
      .catch((error) => {
        Alert.alert('Erro no login', error.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header com botão de voltar e logo */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.backButton}
        >
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>

        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Formulário */}
      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>
        <View style={styles.inputWrapper}>
          <Image
            source={require('../../assets/userIcon.png')}
            style={styles.inputUserIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Insira seu e-mail"
            placeholderTextColor="#9A9A9A"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputWrapper}>
          <Image
            source={require('../../assets/passIcon.png')}
            style={styles.inputPassIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Insira sua senha"
            placeholderTextColor="#9A9A9A"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        {/* Botões mais abaixo */}
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <Text style={styles.linkText}>Nunca acessou nosso aplicativo?</Text>

          <TouchableOpacity
            style={styles.outlinedButton}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={styles.outlinedButtonText}>Faça seu primeiro acesso</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Rodapé branco arredondado */}
      <View style={styles.footer} />
    </SafeAreaView>
  );
};

export default Login;
