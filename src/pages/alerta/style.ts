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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 14,
    color: '#000',
  },
  addContainer: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  addText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 6,
    fontWeight: '500',
    textAlign: 'right',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  flagIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  addButtonText: {
    color: '#9A9A9A',
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});

export default styles;
