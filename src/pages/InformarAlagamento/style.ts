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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  form: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cepContainer: {
    width: '65%',
  },
  gpsContainer: {
    width: '30%',
    alignItems: 'center',
    marginTop: 16,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
  gpsButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gpsIcon: {
    width: 24,
    height: 24,
  },
  confirmButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: 30,
  },
  confirmText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
