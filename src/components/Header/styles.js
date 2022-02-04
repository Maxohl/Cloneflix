import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  textWhite: {
    color: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    zIndex: 999,
  },
  headerSafeAreaView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: Platform.OS == 'ios' ? 50 : 10,
    width: '100%',
    height: 70,
    alignItems: 'center',
  }
});

export default styles;
