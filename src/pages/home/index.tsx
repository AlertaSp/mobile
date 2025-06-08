import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';
import api from '../../services/api';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isUserLogged, setIsUserLogged] = useState(false);

  const [tiete, setTiete] = useState<any>(null);
  const [pinheiros, setPinheiros] = useState<any>(null);
  const [tamanduatei, setTamanduatei] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserLogged(!!user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchAlertas = async () => {
      try {
        const response = await api.get('/alertas');
        const raw = response.data;

        const parse = (item: any) => item.a;

        setTiete(parse(raw.find((item: any) => item.a.local === 'Rio Tietê')));
        setPinheiros(parse(raw.find((item: any) => item.a.local === 'Rio Pinheiros')));
        setTamanduatei(parse(raw.find((item: any) => item.a.local === 'Rio Tamanduateí')));
      } catch (error) {
        console.error('Erro ao buscar alertas:', error);
      }
    };

    fetchAlertas();
  }, []);

  const handleProtectedRoute = (screen: keyof RootStackParamList) => {
    if (isUserLogged) {
      navigation.navigate(screen);
    } else {
      navigation.navigate('AlertaCadastro');
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header fixo */}
      <View style={styles.fixedHeader}>
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Deseja sair do aplicativo?',
              'Você será desconectado.',
              [
                { text: 'Cancelar', style: 'cancel' },
                {
                  text: 'Sair',
                  style: 'destructive',
                  onPress: () => BackHandler.exitApp(),
                },
              ],
              { cancelable: true }
            )
          }
        >
          <Image source={require('../../assets/buguer.png')} style={styles.menuIcon} />
        </TouchableOpacity>

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

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={{ height: 55 }} />

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        </View>

        {/* Acesso Rápido */}
        <View style={styles.quickAccessContainer}>
          <View style={styles.exploreRow}>
            <Text style={styles.quickAccessTitle}>Acesso rápido</Text>
            <View style={styles.exploreTextContainer}>
              <Text style={styles.exploreText}>→ Deslize e explore</Text>
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.iconScroll}>
            <TouchableOpacity style={styles.iconWrapper} onPress={() => handleProtectedRoute('Alerta')}>
              <View style={styles.iconImage}>
                <Image source={require('../../assets/alertaIcon.png')} style={{ width: 35, height: 35 }} />
              </View>
              <Text style={styles.iconText}>Alerta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconWrapper} onPress={() => handleProtectedRoute('Mapa')}>
              <View style={styles.iconImage}>
                <Image source={require('../../assets/mapaIcon.png')} style={{ width: 40, height: 40 }} />
              </View>
              <Text style={styles.iconText}>Mapa Alagamento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconWrapper} onPress={() => handleProtectedRoute('Denuncia')}>
              <View style={styles.iconImage}>
                <Image source={require('../../assets/denunciaIcon.png')} style={{ width: 45, height: 45 }} />
              </View>
              <Text style={styles.iconText}>Denúncia</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate('Clima')}>
              <View style={styles.iconImage}>
                <Image source={require('../../assets/climaIcon.png')} style={{ width: 40, height: 40 }} />
              </View>
              <Text style={styles.iconText}>Climatempo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate('Conscientizacao')}>
              <View style={styles.iconImage}>
                <Image source={require('../../assets/concientizacaoIcon.png')} style={{ width: 40, height: 40 }} />
              </View>
              <Text style={styles.iconText}>Conscientização</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Rios */}
        <View style={styles.riverContainer}>
          <TouchableOpacity style={styles.riverBox}>
            <Image source={require('../../assets/Tiete.png')} style={styles.riverImage} />
            <View style={styles.riverOverlayTextContainer}>
              <Text style={styles.riverText}>Rio Tietê</Text>
              {tiete && (
                <>
                  <Text style={styles.alertText}>Risco: {tiete.nivelRisco}</Text>
                  <Text style={styles.alertText}>Ação: {tiete.acaoRecomendada}</Text>
                </>
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.riverBox}>
            <Image source={require('../../assets/pinheirosIcon.png')} style={styles.riverImage} />
            <View style={styles.riverOverlayTextContainer}>
              <Text style={styles.riverText}>Rio Pinheiros</Text>
              {pinheiros && (
                <>
                  <Text style={styles.alertText}>Risco: {pinheiros.nivelRisco}</Text>
                  <Text style={styles.alertText}>Ação: {pinheiros.acaoRecomendada}</Text>
                </>
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.riverBox}>
            <Image source={require('../../assets/tamanduateiIcon.png')} style={styles.riverImage} />
            <View style={styles.riverOverlayTextContainer}>
              <Text style={styles.riverText}>Rio Tamanduateí</Text>
              {tamanduatei && (
                <>
                  <Text style={styles.alertText}>Risco: {tamanduatei.nivelRisco}</Text>
                  <Text style={styles.alertText}>Ação: {tamanduatei.acaoRecomendada}</Text>
                </>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
