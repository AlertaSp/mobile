import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';
import styles from './style';

// Tipagem correta dos alertas dinâmicos
type Alerta = {
  latitude: number;
  longitude: number;
  titulo: string;
  descricao: string;
};

const Mapa = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [alertas, setAlertas] = useState<Alerta[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const carregarAlertas = async () => {
        try {
          const data = await AsyncStorage.getItem('alertas');
          if (data) {
            const lista: Alerta[] = JSON.parse(data);
            setAlertas(lista);
          } else {
            setAlertas([]);
          }
        } catch (error) {
          console.log('Erro ao carregar alertas:', error);
        }
      };

      carregarAlertas();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header padrão com voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Mapa</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      {/* Mapa com marcadores */}
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}
      >
        {/* Exemplos fixos */}
        <Marker
          coordinate={{ latitude: -23.5216, longitude: -46.6094 }}
          title="Alerta de Alagamento"
          description="Alagamento na Marginal Tietê"
        >
          <Image
            source={require('../../assets/alertaAlagamento.png')}
            style={{ width: 35, height: 35 }}
            resizeMode="contain"
          />
        </Marker>

        <Marker
          coordinate={{ latitude: -23.6034, longitude: -46.6978 }}
          title="Alerta Crítico"
          description="Situação crítica no Rio Pinheiros"
        >
          <Image
            source={require('../../assets/alertaCritico.png')}
            style={{ width: 35, height: 35 }}
            resizeMode="contain"
          />
        </Marker>

        {/* Alerta de Alagamento - Avenida do Estado */}
        <Marker
          coordinate={{ latitude: -23.5596, longitude: -46.6257 }}
          title="Alerta de Alagamento"
          description="Ponto de alagamento na Avenida do Estado"
        >
          <Image
            source={require('../../assets/alertaAlagamento.png')}
            style={{ width: 35, height: 35 }}
            resizeMode="contain"
          />
        </Marker>

        {/* Alerta Crítico - Vila Prudente */}
        <Marker
          coordinate={{ latitude: -23.5823, longitude: -46.5897 }}
          title="Alerta Crítico"
          description="Risco de alagamento por bueiros entupidos em Vila Prudente"
        >
          <Image
            source={require('../../assets/alertaCritico.png')}
            style={{ width: 35, height: 35 }}
            resizeMode="contain"
          />
        </Marker>

        {/* Alerta de Alagamento - Itaquera */}
        <Marker
          coordinate={{ latitude: -23.5393, longitude: -46.4716 }}
          title="Alerta de Alagamento"
          description="Área afetada por alagamento em Itaquera"
        >
          <Image
            source={require('../../assets/alertaAlagamento.png')}
            style={{ width: 35, height: 35 }}
            resizeMode="contain"
          />
        </Marker>

        {/* Dinâmicos do usuário */}
        {alertas.map((alerta, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: alerta.latitude,
              longitude: alerta.longitude,
            }}
            title={alerta.titulo}
            description={alerta.descricao}
          >
            <Image
              source={require('../../assets/alertaAlagamento.png')}
              style={{ width: 35, height: 35 }}
              resizeMode="contain"
            />
          </Marker>
        ))}
      </MapView>

      {/* Rodape */}
      <View style={styles.footer} />
    </SafeAreaView>

        
  );
};

export default Mapa;
