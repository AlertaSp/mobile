import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
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
  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  logo: {
    width: 271.06,
    height: 128,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  buttonBox: {
    backgroundColor: '#16367D',
    borderRadius: 20,
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttonIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffff',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  alertIcon: {
    width: 50,
    height: 50,
    marginRight: 8,
    marginTop: 4,
  },
  infoText: {
    color: '#00000',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
});

export default styles;
