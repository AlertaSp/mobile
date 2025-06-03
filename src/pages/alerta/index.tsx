import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';
import styles from './style';

const Alerta = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../assets/backIcon.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Alerta</Text>
        </View>
        <View style={{ width: 24 }} /> {/* Espaço para alinhar o título */}
      </View>

      {/* Campo de busca */}
      <View style={styles.searchContainer}>
        <Image
          source={require('../../assets/searchIcon.png')}
          style={styles.searchIcon}
        />
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
          <Image
            source={require('../../assets/flagIcon.png')}
            style={styles.flagIcon}
          />
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* Rodape */}
      <View style={styles.footer} />
    </SafeAreaView>
  );
};

export default Alerta;
