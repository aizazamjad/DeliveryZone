import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {NeomorphFlex} from 'react-native-neomorph-shadows';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function NeoButtonLayout({disabled, onPress, title, width}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.touchable]}>
      <NeomorphFlex
        swapShadows
        style={{...styles.neoStyle, ...{width: width ? wp(width) : wp('90%')}}}>
        <Text style={[styles.text, disabled && styles.disabled]}>{title}</Text>
      </NeomorphFlex>
    </TouchableOpacity>
  );
}

export default NeoButtonLayout;

const styles = StyleSheet.create({
  neoStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    borderRadius: 50,
    backgroundColor: '#F7F7F7',
    height: hp('10%'),
  },
  text: {
    color: '#900C3F',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    marginVertical: 20,
    padding: 10,
    fontSize: 18,
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('10%'),
    marginVertical: hp('2%'),
  },
  disabled: {color: '#DAF7A6'},
});
