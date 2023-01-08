import React from 'react';
import {
  TouchableOpacity,
  Pressable,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {NeomorphFlex} from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import DeleteImage from '../images/delete.png';

function NeoDriverCardLayout({
  disabled,
  onPress,
  handleDeleteDriver,
  ID,
  name,
  country,
  phone,
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.touchable}>
      <NeomorphFlex swapShadows style={styles.neoStyle}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{country}</Text>
        <Text style={styles.text}>{phone}</Text>
        <Pressable onPress={() => handleDeleteDriver(ID)}>
          <Image source={DeleteImage} style={styles.delete} />
        </Pressable>
      </NeomorphFlex>
    </TouchableOpacity>
  );
}

export default NeoDriverCardLayout;

const styles = StyleSheet.create({
  neoStyle: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
    shadowRadius: 10,
    borderRadius: 16,
    backgroundColor: '#F7F7F7',
    width: widthPercentageToDP('90%'),
    height: heightPercentageToDP('25%'),
  },
  text: {
    color: '#900C3F',
    fontWeight: 'bold',
    fontSize: 16,
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
    height: heightPercentageToDP('25%'),
    marginBottom: heightPercentageToDP('4%'),
    paddingVertical: 10,
  },
  delete: {
    height: heightPercentageToDP('5%'),
    width: heightPercentageToDP('5%'),
    marginVertical: heightPercentageToDP('2%'),
  },
});
