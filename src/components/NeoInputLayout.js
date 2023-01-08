import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {NeomorphFlex} from 'react-native-neomorph-shadows';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function NeoInputLayout({
  secureTextEntry,
  style,
  value,
  type,
  onChangeText,
  placeholder,
}) {
  return (
    <NeomorphFlex inner swapShadows style={styles.neoStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={style}
        value={value}
        keyboardType={type || 'default'}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </NeomorphFlex>
  );
}

export default NeoInputLayout;

const styles = StyleSheet.create({
  neoStyle: {
    shadowRadius: 10,
    borderRadius: 50,
    backgroundColor: '#F7F7F7',
    width: wp('90%'),
    height: hp('10%'),
  },
});
