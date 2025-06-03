import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  SafeAreaView,
} from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';
import styles from './style';
import {
  getWeatherByCity,
  getWeatherByCoords,
  getForecastByCity,
} from '../../services/weatherApi';

const Clima = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [cidade, setCidade] = useState('');
  const [dados, setDados] = useState<any>(null);
  const [previsao, setPrevisao] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  const buscarClima = async () => {
    if (!cidade.trim()) return;

    setLoading(true);
    setErro(false);
    try {
      const data = await getWeatherByCity(cidade);
      setDados(data);

      const forecastData = await getForecastByCity(cidade);
      const filtrado = forecastData.list.filter((item: any) =>
        item.dt_txt.includes('12:00:00')
      );
      setPrevisao(filtrado);
    } catch (e) {
      setErro(true);
      setDados(null);
      setPrevisao([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;

        const local = await Location.getCurrentPositionAsync({});
        const data = await getWeatherByCoords(local.coords.latitude, local.coords.longitude);
        setDados(data);

        const forecastData = await getForecastByCity(data.name);
        const filtrado = forecastData.list.filter((item: any) =>
          item.dt_txt.includes('12:00:00')
        );
        setPrevisao(filtrado);
      } catch {
        setErro(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const formatarData = () => {
    const hoje = new Date();
    return hoje.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.loadingText}>Carregando clima...</Text>
        </View>
      ) : (
        <>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
            </TouchableOpacity>
            <View style={styles.headerCenter}>
              <Text style={styles.headerTitle}>Clima</Text>
            </View>
            <View style={{ width: 24 }} />
          </View>

          {/* Busca */}
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Digite a cidade"
              placeholderTextColor="#ccc"
              style={styles.input}
              value={cidade}
              onChangeText={setCidade}
            />
            <TouchableOpacity style={styles.botaoCompacto} onPress={buscarClima}>
              <Text style={styles.botaoTexto}>IR</Text>
            </TouchableOpacity>
          </View>

          {dados && (
            <View style={styles.resultadoBox}>
              <Text style={styles.label}>{dados.name?.toUpperCase()}</Text>
              <View style={styles.row}>
                <Text style={styles.temperatura}>
                  {Math.round(dados.main.temp)}
                  <Text style={styles.temperatura}>°</Text>
                </Text>
                <Text style={styles.date}>{formatarData().toUpperCase()}</Text>
              </View>
              <Image
                source={{ uri: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@4x.png` }}
                style={styles.icone}
              />
            </View>
          )}

          {erro && (
            <Text style={styles.erro}>Erro ao buscar clima. Verifique o nome da cidade.</Text>
          )}

          {previsao.length > 0 && (
            <View style={{ marginTop: -25 }}>
              <Text style={[styles.label, { paddingHorizontal: 20 }]}>PRÓXIMOS DIAS</Text>
              {previsao.slice(0, 4).map((item, index) => (
                <View key={index} style={styles.cardPrevisao}>
                  <Text style={styles.cardTexto}>
                    {new Date(item.dt_txt).toLocaleDateString('pt-BR', {
                      weekday: 'short',
                      day: '2-digit',
                      month: '2-digit',
                    })}
                  </Text>
                  <Image
                    source={{
                      uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                    }}
                    style={styles.cardIcone}
                  />
                  <Text style={styles.cardTexto}>
                    {Math.round(item.main.temp)}
                    <Text style={styles.cardTexto}>°</Text>
                  </Text>
                </View>
              ))}
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default Clima;
