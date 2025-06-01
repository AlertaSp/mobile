import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EA9E1',
  },

 
  curvedBackground: {
    width: '100%',
    height: 500,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    transform: [{ scaleX: 1.2 }],
    position: 'absolute',
    top: 0,
    zIndex: 0,
  },

 
  headerContent: {
    marginTop: 50,
    alignItems: 'center',
    zIndex: 1,
    
  },

  logo: {
    width: 271.06,
    height: 128,
    marginBottom: 10,
  },

  stopIcon: {
    width: 130,
    height: 130,
  },

  alertText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },

  buttonArea: {
    marginTop: 40,
    paddingHorizontal: 32,
    alignItems: 'center',
  },

  accessButton: {
    backgroundColor: '#EE404C',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },

  accessButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  registerButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
  },

closeIcon: {
  position: 'absolute',
  top: 40,
  left: 20,
  zIndex: 10,
},


  registerButtonText: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default styles;
