// src/pages/cadastro/style.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EA9E1',
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    height: 228,
    backgroundColor: '#fff',
    borderBottomRightRadius: 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 35,
  },
  logo: {
    width: 271.06,
    height: 128,
  },
  form: {
    paddingHorizontal: 32,
    marginTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: -15,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#000',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  outlinedButton: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    width: '100%',
    marginTop: 12,
  },
  outlinedButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  backButton: {
  position: 'absolute',
  left: 16,
  top: 40,
  zIndex: 10,
},

backIcon: {
  width: 24,
  height: 24,
},

});

export default styles;
