import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';
import styles from './style';

type Alerta = {
  latitude: number;
  longitude: number;
  titulo: string;
  descricao: string;
};

const InformarAlagamento = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [descricaoPersonalizada, setDescricaoPersonalizada] = useState('');
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);

  const buscarCep = async () => {
    const cepLimpo = cep.replace('-', '');
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const { logradouro, bairro } = response.data;
      setEndereco(logradouro);
      setBairro(bairro);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível buscar o endereço pelo CEP.');
    }
  };

  const buscarLocalizacao = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Permita o acesso à localização.');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setCoords(location.coords);

    const response = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    const { street, district, postalCode } = response[0];
    setEndereco(street || '');
    setBairro(district || '');
    setCep(postalCode?.replace('-', '') || '');
  };

  const confirmar = async () => {
    if (!cep || !endereco || !numero || !bairro) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos.');
      return;
    }

    let latitude = coords?.latitude;
    let longitude = coords?.longitude;

    if (!latitude || !longitude) {
      latitude = -23.55052;
      longitude = -46.633308;
    }

    const novoAlerta: Alerta = {
      latitude,
      longitude,
      titulo: 'Alerta de Alagamento',
      descricao: `${endereco}, ${numero} - ${bairro}. ${descricaoPersonalizada}`,
    };

    try {
      const alertasSalvos = await AsyncStorage.getItem('alertas');
      const lista: Alerta[] = alertasSalvos ? JSON.parse(alertasSalvos) : [];
      lista.push(novoAlerta);
      await AsyncStorage.setItem('alertas', JSON.stringify(lista));

      Alert.alert('Sucesso', 'Alerta de alagamento adicionado!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar o alerta.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Alagamento</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <KeyboardAvoidingView style={styles.form} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.row}>
          <View style={styles.cepContainer}>
            <Text style={styles.label}>CEP</Text>
            <TextInput
              style={styles.input}
              value={cep}
              onChangeText={(text) => {
                const cepFormatado = text
                  .replace(/\D/g, '')
                  .replace(/^(\d{5})(\d)/, '$1-$2')
                  .substring(0, 9);
                setCep(cepFormatado);
              }}
              placeholder="00000-000"
              keyboardType="numeric"
              onBlur={buscarCep}
            />
          </View>

          <View style={styles.gpsContainer}>
            <Text style={styles.label}>Localizar GPS</Text>
            <TouchableOpacity style={styles.gpsButton} onPress={buscarLocalizacao}>
              <Image source={require('../../assets/gps.png')} style={styles.gpsIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.label}>Endereço</Text>
        <TextInput
          style={styles.input}
          value={endereco}
          onChangeText={setEndereco}
          placeholder="Rua, avenida, travessa etc"
        />

        <Text style={styles.label}>Número</Text>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="Adicione o número"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Bairro</Text>
        <TextInput
          style={styles.input}
          value={bairro}
          onChangeText={setBairro}
          placeholder="Bairro"
        />

        <Text style={styles.label}>Descrição do Alagamento</Text>
        <TextInput
          style={styles.input}
          value={descricaoPersonalizada}
          onChangeText={setDescricaoPersonalizada}
          placeholder="Ex: Rua completamente alagada"
        />

        <TouchableOpacity style={styles.confirmButton} onPress={confirmar}>
          <Text style={styles.confirmText}>Confirmar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default InformarAlagamento;
