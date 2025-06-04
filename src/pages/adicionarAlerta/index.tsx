import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';
import styles from './style';

const AdicionarAlerta = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [nomeEndereco, setNomeEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');

  const buscarCep = async (valor: string) => {
    const cepLimpo = valor.replace(/\D/g, '');
    if (cepLimpo.length !== 8) return;

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      if (response.data.erro) {
        Alert.alert('CEP inválido', 'Não foi possível localizar o endereço.');
        return;
      }

      setRua(response.data.logradouro || '');
      setBairro(response.data.bairro || '');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao buscar o endereço via CEP.');
    }
  };

  const handleSalvar = async () => {
    if (!nomeEndereco || !rua || !numero || !bairro) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos.');
      return;
    }

    const alerta = {
      nome: nomeEndereco,
      cep,
      rua,
      numero,
      bairro,
    };

    try {
      const dados = await AsyncStorage.getItem('enderecos');
      const lista = dados ? JSON.parse(dados) : [];
      lista.push(alerta);
      await AsyncStorage.setItem('enderecos', JSON.stringify(lista));

      Alert.alert('Alerta criado com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar o alerta.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>ALERTA</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.form}>
            <Text style={styles.label}>Nome do endereço</Text>
            <View style={styles.inputWrapper}>
              <Image source={require('../../assets/flagIcon.png')} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Ex: Casa mãe"
                placeholderTextColor="#9A9A9A"
                value={nomeEndereco}
                onChangeText={setNomeEndereco}
              />
            </View>

            <Text style={styles.label}>CEP</Text>
            <View style={styles.inputWrapper}>
              <Image source={require('../../assets/flagIcon.png')} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="00000-000"
                placeholderTextColor="#9A9A9A"
                value={cep}
                onChangeText={(value) => {
                  setCep(value);
                  if (value.replace(/\D/g, '').length === 8) {
                    buscarCep(value);
                  }
                }}
                keyboardType="numeric"
              />
            </View>

            <Text style={styles.label}>Rua</Text>
            <View style={styles.inputWrapper}>
              <Image source={require('../../assets/flagIcon.png')} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Endereço"
                placeholderTextColor="#9A9A9A"
                value={rua}
                onChangeText={setRua}
              />
            </View>

            <Text style={styles.label}>Número</Text>
            <View style={styles.inputWrapper}>
              <Image source={require('../../assets/flagIcon.png')} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Número"
                placeholderTextColor="#9A9A9A"
                keyboardType="numeric"
                value={numero}
                onChangeText={setNumero}
              />
            </View>

            <Text style={styles.label}>Bairro</Text>
            <View style={styles.inputWrapper}>
              <Image source={require('../../assets/flagIcon.png')} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Bairro"
                placeholderTextColor="#9A9A9A"
                value={bairro}
                onChangeText={setBairro}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSalvar}>
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AdicionarAlerta;
