// src/pages/formulario/index.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import styles from './style';

const FormularioDenuncia = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [tipoProblema, setTipoProblema] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState(false);

  const opcoesProblema = [
    'Alagamento',
    'Bueiro entupido',
    'Lixo acumulado',
    'Escoamento irregular',
    'Rachaduras ou desabamento',
    'Córrego poluído ou transbordando',
  ];

  const handleSelect = (opcao: string) => {
    setTipoProblema(opcao);
    setShowOptions(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Denuncia')}>
          <Image source={require('../../assets/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Formulário</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Top Info */}
        <View style={styles.topInfo}>
          <Image source={require('../../assets/joiaIcon.png')} style={styles.joiaIcon} />
          <Text style={styles.topInfoText}>
            Contamos com sua{'\n'}denúncia para melhorar{'\n'}nossa cidade.
          </Text>
        </View>

        {/* Tipo do problema */}
        <Text style={styles.label}>Tipo do problema</Text>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setShowOptions(!showOptions)}
        >
          <Text style={styles.dropdownText}>
            {tipoProblema || 'Selecione o problema'}
          </Text>
        </TouchableOpacity>

        {showOptions && (
          <View style={styles.dropdownOptionsContainer}>
            {opcoesProblema.map((opcao, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownOption}
                onPress={() => handleSelect(opcao)}
              >
                <Text style={styles.optionText}>{opcao}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Endereço */}
        <Text style={styles.label}>CEP</Text>
        <TextInput placeholder="00000-000" placeholderTextColor="#9A9A9A" style={styles.input} />

        <Text style={styles.label}>Endereço</Text>
        <TextInput placeholder="Rua, avenida, travessa etc" placeholderTextColor="#9A9A9A" style={styles.input} />

        <Text style={styles.label}>Número</Text>
        <TextInput placeholder="Altura do número" placeholderTextColor="#9A9A9A" style={styles.inputSmall} />

        <Text style={styles.label}>Bairro</Text>
        <TextInput placeholder="Digite o bairro" placeholderTextColor="#9A9A9A" style={styles.input} />

        {/* Descrição */}
        <Text style={styles.label}>Descreva sua denúncia</Text>
        <TextInput
          placeholder="Detalhe sua denúncia."
          placeholderTextColor="#9A9A9A"
          multiline
          style={styles.textArea}
        />

        {/* Upload de imagem com descrição ao lado */}
        <Text style={styles.label}>Detalhes do local</Text>
        <View style={styles.photoRow}>
          <TouchableOpacity style={styles.photoButton}>
            <Image source={require('../../assets/fotoIcon.png')} style={styles.photoIcon} />
            <Text style={styles.photoButtonText}>Foto do local</Text>
          </TouchableOpacity>
          <Text style={styles.subtext}>
            Envie uma foto do local da denúncia para que possamos localizar e agir o mais rápido possível.
          </Text>
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormularioDenuncia;
