# 📱 AlertaSP

Aplicativo mobile desenvolvido em parceria com a Prefeitura do Estado de São Paulo, com o objetivo de alertar a população sobre riscos de enchentes em tempo real. 

O **AlertaSP** oferece monitoramento por sensores IoT em pontos críticos, envio de alertas personalizados por região e um sistema colaborativo de denúncias feito pelos próprios usuários. Com isso, buscamos promover mais segurança urbana e engajamento da comunidade na prevenção de desastres naturais.

---

## 👨‍💻 Equipe

| Nome            | RM       |
|-----------------|----------|
| Luis Henrique   | RM552692 |
| Sabrina Café    | RM553568 |
| Matheus Duarte  | RM554199 |

---

## 🚀 Funcionalidades principais

- Monitoramento de alagamentos por sensores IoT
- Alertas em tempo real por localização
- Mapa com regiões afetadas
- Denúncia de pontos de risco (rios, córregos, bueiros, etc.)
- Informações de conscientização e prevenção

---

## 📦 Dependências utilizadas

### 🔧 Núcleo do App
| Dependência                      | Função                                                  |
|----------------------------------|----------------------------------------------------------|
| `react-native`                   | Componentes base do app                                 |
| `react`                          | Core da aplicação com JSX e hooks                       |
| `expo`                           | Framework para desenvolvimento mobile                   |
| `expo-status-bar`               | Controle da barra de status                             |
| `react-native-safe-area-context`| Adaptação para telas com notch                          |

### 📍 Geolocalização
| Dependência        | Função                                  |
|--------------------|------------------------------------------|
| `expo-location`    | Captura da localização via GPS           |

### 🌦️ API / Clima
| Dependência         | Função                                       |
|---------------------|-----------------------------------------------|
| `axios`             | Requisições HTTP                             |
| `expo-constants`*   | Acesso a variáveis de ambiente / chave da API |

### 🧭 Navegação
| Dependência                     | Função                                       |
|----------------------------------|-----------------------------------------------|
| `@react-navigation/native`       | Estrutura de navegação principal             |
| `@react-navigation/native-stack`| Navegação em pilha                          |
| `react-native-screens`          | Otimização da navegação                     |
| `react-native-gesture-handler`  | Suporte a gestos                            |
| `react-native-reanimated`       | Animações utilizadas na navegação           |

### 🗺️ Mapa
| Dependência         | Função                        |
|---------------------|-------------------------------|
| `react-native-maps` | Exibição de mapa e marcadores |

### ☁️ Firebase (caso usado)
| Dependência | Função                                      |
|-------------|----------------------------------------------|
| `firebase`  | Autenticação, Firestore, imagens e mais      |

### 📸 Imagens e Denúncias (caso usado)
| Dependência         | Função                                 |
|---------------------|------------------------------------------|
| `expo-image-picker` | Seleção ou captura de fotos              |

---

## 🛠️ Tecnologias
- React Native + Expo
- TypeScript
- Firebase (Autenticação e Denúncias)
- OpenWeather API
- Google Maps / OpenStreetMap
- Sensores IoT (simulados)

---

## 📍 Telas
- Login / Cadastro
- Home com Acesso Rápido
- Alerta com busca e cadastro de endereço
- Denúncia com envio de imagem
- Clima e previsão por localização
- Mapa com marcadores de risco

---
