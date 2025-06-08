import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16367D',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 16,
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
    textAlign: 'center',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 20,
    
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: '#000',
    flex: 1,
  },
  botaoCompacto: {
    backgroundColor: '#fff',
    marginLeft: 10,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  botaoTexto: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#16367D',
  },
  erro: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  resultadoBox: {
    alignItems: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
  temperatura: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
  },
  date: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  icone: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    marginVertical: 10,
  },
  cardPrevisao: {
    backgroundColor: '#6FC6F1',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardIcone: {
    width: 40,
    height: 40,
  },



  // PRECISO AJUSTAR ISSO DEPOIS -> Se der tempo colocar um carregamento melhor
  loadingContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#3EA9E1',
},
loadingText: {
  color: '#fff',
  marginTop: 10,
  fontSize: 16,
},
});

export default styles;
