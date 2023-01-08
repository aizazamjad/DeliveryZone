import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Label = ({text}) => {
  return (
    <View style={styles._PV}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  _PV: {
    paddingVertical: heightPercentageToDP('2%'),
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5A5A5A',
  },
});
