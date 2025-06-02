// src/pages/conscientizacao/style.ts
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EA9E1',
  },
  scroll: {
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 16,
    marginBottom: 12,
  },
  infoIcon: {
    width: 60,
    height: 60,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  bannerContainer: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
  },
  bannerImage: {
    width,
    height: 160,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  alertIcon: {
    width: 50,
    height: 50,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
bullet: {
  marginBottom: 12,
  paddingLeft: 35,
},
  bulletTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  bulletDescription: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 20,
  },
});

export default styles;
