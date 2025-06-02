import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Simulação: você pode usar AsyncStorage ou contexto depois
  const isUserLogged = false;

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header fixo com ícone do menu e usuário */}
      <View style={styles.fixedHeader}>
        <Image source={require('../../assets/buguer.png')} style={styles.menuIcon} />

        <TouchableOpacity
          onPress={() => {
            if (!isUserLogged) {
              navigation.navigate('AlertaCadastro');
            }
          }}
        >
          <Image source={require('../../assets/user.png')} style={styles.userIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ height: 55 }} />

        {/* Logo da prefeitura */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Acesso rápido com ícones navegáveis */}
        <View style={styles.quickAccessContainer}>
          <View style={styles.exploreRow}>
            <Text style={styles.quickAccessTitle}>Acesso rápido</Text>
            <View style={styles.exploreTextContainer}>
              <Text style={styles.exploreText}>→ Deslize e explore</Text>
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.iconScroll}>
            
            {/* Alerta */}
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => navigation.navigate('Alerta')}
            >
              <View style={styles.iconImage}>
                <Image source={require('../../assets/alertaIcon.png')} style={{ width: 35, height: 35 }} />
              </View>
              <Text style={styles.iconText}>Alerta</Text>
            </TouchableOpacity>

            {/* Mapa Alagamento */}
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => navigation.navigate('Mapa')}
            >
              <View style={styles.iconImage}>
                <Image source={require('../../assets/mapaIcon.png')} style={{ width: 40, height: 40 }} />
              </View>
              <Text style={styles.iconText}>Mapa Alagamento</Text>
            </TouchableOpacity>

            {/* Denúncia */}
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => navigation.navigate('Denuncia')}
            >
              <View style={styles.iconImage}>
                <Image source={require('../../assets/denunciaIcon.png')} style={{ width: 45, height: 45 }} />
              </View>
              <Text style={styles.iconText}>Denúncia</Text>
            </TouchableOpacity>

            {/* Climatempo */}
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => navigation.navigate('Clima')}
            >
              <View style={styles.iconImage}>
                <Image source={require('../../assets/climaIcon.png')} style={{ width: 40, height: 40 }} />
              </View>
              <Text style={styles.iconText}>Climatempo</Text>
            </TouchableOpacity>

            {/* Conscientização */}
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => navigation.navigate('Conscientizacao')}
            >
              <View style={styles.iconImage}>
                <Image source={require('../../assets/concientizacaoIcon.png')} style={{ width: 40, height: 40 }} />
              </View>
              <Text style={styles.iconText}>Conscientização</Text>
            </TouchableOpacity>

          </ScrollView>
        </View>

        {/* Botões dos Rios */}
        <View style={styles.riverContainer}>
          <TouchableOpacity style={styles.riverBox}>
            <Image source={require('../../assets/Tiete.png')} style={styles.riverImage} />
            <Text style={styles.riverText}>Rio Tietê</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.riverBox}>
            <Image source={require('../../assets/pinheirosIcon.png')} style={styles.riverImage} />
            <Text style={styles.riverText}>Rio Pinheiros</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.riverBox}>
            <Image source={require('../../assets/tamanduateiIcon.png')} style={styles.riverImage} />
            <Text style={styles.riverText}>Rio Tamanduateí</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
