// src/pages/cadastro/index.tsx
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
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../services/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import styles from './style';

const Cadastro = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = async () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const userId = userCredential.user.uid;

      await setDoc(doc(db, 'usuarios', userId), {
        nome: nome,
        email: email,
        criadoEm: new Date(),
      });

      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      navigation.navigate('Login');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Erro ao cadastrar', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.backButton}
      >
        <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <View style={styles.header}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.scrollContainer}>
        <View style={styles.form}>
          <Text style={styles.title}>Cadastre-se</Text>

          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#9A9A9A"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="email@exemplo.com"
            placeholderTextColor="#9A9A9A"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#9A9A9A"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <Text style={styles.label}>Confirme a senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirme a senha"
            placeholderTextColor="#9A9A9A"
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />

          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.outlinedButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.outlinedButtonText}>Já tenho um login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cadastro;
