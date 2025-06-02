import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EA9E1',
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
    textAlign: 'center',
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  label: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  inputIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 14,
    color: '#000',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  inputWrapperSmall: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 12,
  paddingHorizontal: 12,
  marginBottom: 16,
  width: '45%',
},

});

export default styles;
