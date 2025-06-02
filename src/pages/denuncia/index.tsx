// src/pages/denuncia/index.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import styles from './style';

const Denuncia = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Denúncia</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Botões */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonBox}
          onPress={() => navigation.navigate('FormularioDenuncia')}
        >
          <Image source={require('../../assets/denunciarPoluicaoIcon.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>DENUNCIAR{'\n'}POLUIÇÃO DOS RIOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBox}>
          <Image source={require('../../assets/denunciaAlagamentoIcon.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>DENUNCIAR{'\n'}ALAGAMENTO</Text>
        </TouchableOpacity>
      </View>

      {/* Texto com ícone */}
      <View style={styles.infoContainer}>
        <Image source={require('../../assets/alertIcon.png')} style={styles.alertIcon} />
        <Text style={styles.infoText}>
          Denunciar ajuda a prevenir{'\n'}alagamentos e manter a cidade limpa.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Denuncia;
