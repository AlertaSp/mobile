// src/pages/login/style.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EA9E1',
  },
  header: {
    width: '100%',
    height: 228,
    backgroundColor: '#fff',
    borderBottomRightRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 271.06,
    height: 128,
  },
  form: {
    paddingHorizontal: 32,
    marginTop: 40,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 6,
    marginTop: 12,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  inputUserIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  inputPassIcon: {
    width: 25,
    height: 13.64,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 14,
    color: '#000',
  },
  buttonArea: {
    marginTop: 40,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 18,
  },
  linkText: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  outlinedButton: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    width: '100%',
  },
  outlinedButtonText: {
    color: '#fff',
    fontSize: 14,
  },

  footer: {
  width: '100%',
  height: 50,
  backgroundColor: '#fff',
  borderTopLeftRadius: 100,
  borderTopRightRadius: 100,
  position: 'absolute',
  bottom: 0,
},
});

export default styles;
