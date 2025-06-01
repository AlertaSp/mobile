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

const Home = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header fixo */}
      <View style={styles.fixedHeader}>
        <Image source={require('../../assets/buguer.png')} style={styles.menuIcon} />
        <Image source={require('../../assets/user.png')} style={styles.userIcon} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
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
            <TouchableOpacity style={styles.iconWrapper}>
              <View style={styles.iconImage}>
                <Image source={require('../../assets/alertaIcon.png')} style={{ width: 35, height: 35 }} />
              </View>
              <Text style={styles.iconText}>Alerta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper}>
              <View style={styles.iconImage}>
                <Image source={require('../../assets/mapaIcon.png')} style={{ width: 40, height: 40 }} />
              </View>
              <Text style={styles.iconText}>Mapa Alagamento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper}>
              <View style={styles.iconImage}>
                <Image source={require('../../assets/denunciaIcon.png')} style={{ width: 45, height: 45 }} />
              </View>
              <Text style={styles.iconText}>Denúncia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper}>
              <View style={styles.iconImage}>
                <Image source={require('../../assets/climaIcon.png')} style={{ width: 40, height: 40 }} />
              </View>
              <Text style={styles.iconText}>Climatempo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrapper}>
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
