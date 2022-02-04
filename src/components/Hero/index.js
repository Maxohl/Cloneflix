import React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Hero = ({ filme }) => {
  return (
    <ImageBackground
      style={styles.hero}
      source={{uri: filme.cover}}>
      <View>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={{uri: filme.logoMobile ? filme.logoMobile : filme.logo}}
        />
      </View>
      <View style={styles.containerTop10}>
        <Image
          resizeMode="contain"
          style={styles.top10Badge}
          source={require('../../assets/TopTen.png')}
        />
        <Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
      </View>
      <LinearGradient
        style={styles.gradient}
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
      />
    </ImageBackground>
  );
};

export default Hero;
