// src/pages/login/index.tsx
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './style';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Topo branco com logo */}
      <View style={styles.header}>
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
          />
        </View>

        {/* Botões mais abaixo */}
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>

          <Text style={styles.linkText}>Nunca acessou nosso aplicativo?</Text>

          <TouchableOpacity style={styles.outlinedButton}>
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
