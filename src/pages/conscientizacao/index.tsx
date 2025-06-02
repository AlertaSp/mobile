// src/pages/conscientizacao/index.tsx
import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import styles from './style';

const { width } = Dimensions.get('window');

const images = [
  require('../../assets/foto1.png'),
  require('../../assets/foto2.png'),
  require('../../assets/foto3.png'),
  require('../../assets/foto4.png'),
];

const Conscientizacao = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const scrollRef = useRef<ScrollView>(null);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        currentIndex = (currentIndex + 1) % images.length;
        scrollRef.current.scrollTo({ x: width * currentIndex, animated: true });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Conscientização</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Título com ícone */}
        <View style={styles.infoHeader}>
          <Image source={require('../../assets/denunciaIcon.png')} style={styles.infoIcon} />
          <Text style={styles.infoTitle}>Se mantenha informado</Text>
        </View>

        {/* Banner rotativo */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={scrollRef}
          style={styles.bannerContainer}
        >
          {images.map((img, index) => (
            <Image key={index} source={img} style={styles.bannerImage} resizeMode="cover" />
          ))}
        </ScrollView>

        {/* Perigos das Enchentes */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Image source={require('../../assets/alertIcon.png')} style={styles.alertIcon} />
            <Text style={styles.sectionTitle}>Perigos das Enchentes</Text>
          </View>

          <Text style={styles.bullet}>
            <Text style={styles.bulletTitle}>• Risco de doenças{'\n'}</Text>
            <Text style={styles.bulletDescription}>A água das enchentes pode conter esgoto e causar doenças como leptospirose.</Text>
          </Text>

          <Text style={styles.bullet}>
            <Text style={styles.bulletTitle}>• Choques elétricos{'\n'}</Text>
            <Text style={styles.bulletDescription}>Contato com água e fios elétricos é extremamente perigoso.</Text>
          </Text>

          <Text style={styles.bullet}>
            <Text style={styles.bulletTitle}>• Afogamentos{'\n'}</Text>
            <Text style={styles.bulletDescription}>Correntes de água podem parecer fracas, mas são capazes de arrastar pessoas e veículos.</Text>
          </Text>

          <Text style={styles.bullet}>
            <Text style={styles.bulletTitle}>• Danos à estrutura de casas{'\n'}</Text>
            <Text style={styles.bulletDescription}>A força da água pode comprometer paredes, muros e fundações.</Text>
          </Text>
        </View>

        {/* URGÊNCIA */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Image source={require('../../assets/alertIcon.png')} style={styles.alertIcon} />
            <Text style={styles.sectionTitle}>URGÊNCIA?</Text>
          </View>

          <Text style={styles.bullet}>
            <Text style={styles.bulletTitle}>• Corpo de bombeiros{'\n'}</Text>
            <Text style={styles.bulletDescription}>Telefone: 193.</Text>
          </Text>

          <Text style={styles.bullet}>
            <Text style={styles.bulletTitle}>• Pronto socorro{'\n'}</Text>
            <Text style={styles.bulletDescription}>Telefone: 192.</Text>
          </Text>

          <Text style={styles.bullet}>
            <Text style={styles.bulletTitle}>• Defesa civil{'\n'}</Text>
            <Text style={styles.bulletDescription}>Telefone: 199.</Text>
          </Text>

          <Text style={styles.bullet}>
            <Text style={styles.bulletTitle}>• Marinha{'\n'}</Text>
            <Text style={styles.bulletDescription}>Telefone: 185.</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Conscientizacao;
