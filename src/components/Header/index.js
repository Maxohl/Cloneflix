import React from 'react';
import {Text, View, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Header = () => {
  return (
    <LinearGradient
      style={styles.header}
      colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}>
      <SafeAreaView style={styles.headerSafeAreaView}>
        <Image source={require('../../assets/Logo-small.png')} />
        <TouchableOpacity>
          <Text style={styles.textWhite}>Séries</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textWhite}>Filmes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textWhite}>Minha Lista</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Header;
