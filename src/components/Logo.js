import {Image, StyleSheet} from 'react-native';
import React from 'react';
import LogoImage from '../images/dz-logo.png';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Logo = () => {
  return <Image source={LogoImage} style={styles.logo} />;
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    height: heightPercentageToDP('10%'),
    width: widthPercentageToDP('60%'),
    marginVertical: heightPercentageToDP('5%'),
    alignSelf: 'center',
  },
});
