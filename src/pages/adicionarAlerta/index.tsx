import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStack';
import styles from './style';

const AdicionarAlerta = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>ALERTA</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.form}>
            <Text style={styles.label}>Nome do endereço</Text>
            <View style={styles.inputWrapper}>
              <Image source={require('../../assets/flagIcon.png')} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#9A9A9A"
              />
            </View>

            <Text style={styles.label}>Rua</Text>
            <View style={styles.inputWrapper}>
              <Image source={require('../../assets/flagIcon.png')} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Endereço"
                placeholderTextColor="#9A9A9A"
              />
            </View>

            <Text style={styles.label}>Número</Text>
            <View style={styles.inputWrapper}>
              <Image source={require('../../assets/flagIcon.png')} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Número"
                placeholderTextColor="#9A9A9A"
                keyboardType="numeric"
              />
            </View>

            <Text style={styles.label}>Bairro</Text>
            <View style={styles.inputWrapper}>
              <Image source={require('../../assets/flagIcon.png')} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Bairro"
                placeholderTextColor="#9A9A9A"
              />
            </View>

            <Text style={styles.label}>Telefone</Text>
            <View style={styles.inputWrapper}>
              <Image source={require('../../assets/flagIcon.png')} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="(11) 91234-5678"
                placeholderTextColor="#9A9A9A"
                keyboardType="phone-pad"
              />
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AdicionarAlerta;
