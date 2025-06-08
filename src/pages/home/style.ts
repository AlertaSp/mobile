// src/pages/home/style.ts
import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeContainer: {
  flex: 1,
  backgroundColor: '#0000',
},
scrollContent: {
  paddingHorizontal: 16,
},

fixedHeader: {
  position: 'absolute',
  top: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
  left: 0,
  right: 0,
  height: 50,
  backgroundColor: '#0000',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 16,
  paddingTop: 6,
  zIndex: 10,
},
  menuIcon: {
    width: 32,
    height: 32,
  },
  userIcon: {
    width: 30,
    height: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: -10,
    marginBottom: 10,
  },
  logo: {
    width: 271,
    height: 128,
  },
  quickAccessContainer: {
    marginBottom: 24,
  },
  exploreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  quickAccessTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  exploreTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exploreText: {
    fontSize: 14,
    color: '#000',
    marginRight: 6,
  },
  iconScroll: {
    flexDirection: 'row',
  },
  iconWrapper: {
    alignItems: 'center',
    marginRight: 20,
    width: 80,
  },
  iconImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#16367D',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  iconText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    maxWidth: 80,
  },
  riverContainer: {
    marginTop: -10,
  },
  riverBox: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  riverImage: {
    width: '100%',
    height: 120,
  },
  riverText: {
    position: 'absolute',
    top: '40%',
    left: '5%',
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default styles;