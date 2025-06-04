import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';
import styles from './style';

type AlertaItem = {
  nome: string;
  rua: string;
  numero: string;
  bairro: string;
  telefone: string;
};

const Alerta = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [enderecos, setEnderecos] = useState<AlertaItem[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const carregarDados = async () => {
        const dados = await AsyncStorage.getItem('enderecos');
        const lista = dados ? JSON.parse(dados) : [];
        setEnderecos(lista);
      };
      carregarDados();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Alerta</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      {/* Campo de busca */}
      <View style={styles.searchContainer}>
        <Image source={require('../../assets/searchIcon.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar endereço"
          placeholderTextColor="#9A9A9A"
        />
      </View>

      {/* Botão adicionar endereço */}
      <View style={styles.addContainer}>
        <Text style={styles.addText}>Adicione endereços</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AdicionarAlerta')}
        >
          <Image source={require('../../assets/flagIcon.png')} style={styles.flagIcon} />
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de alertas */}
      <ScrollView style={{ marginTop: 20, paddingHorizontal: 16 }}>
        {enderecos.map((item, index) => (
          <View key={index} style={styles.alertBox}>
            <Text style={styles.alertText}>{item.nome}</Text>
            <Image
              source={require('../../assets/alerta.png')}
              style={{ width: 24, height: 24 }}
            />
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer} />
    </SafeAreaView>
  );
};

export default Alerta;
