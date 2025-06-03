import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';
import styles from './style';

const Mapa = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
        {/* Alerta de Alagamento - Marginal Tietê */}
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

        {/* Alerta Crítico - Rio Pinheiros */}
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
      </MapView>
    </SafeAreaView>
  );
};

export default Mapa;
