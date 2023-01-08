import React, {useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Label from '../components/Label';
import Logo from '../components/Logo';
import NeoButtonLayout from '../components/NeoButtonLayout';
import NeoInputLayout from '../components/NeoInputLayout';
import UI_Container from '../components/UI_Container';
import {registerService} from '../services/registerServices';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleRegister = async () => {
    const user = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };

    const result = await registerService(user);

    if (result.token) {
      handleGoBack();
    } else {
      Alert.alert('Something went wrong!!!');
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <UI_Container>
      <Logo />

      <Label text={'Register Here!'} />

      <Label text={'Name:'} />

      <NeoInputLayout
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Label text={'Email:'} />

      <NeoInputLayout
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Label text={'Password:'} />

      <NeoInputLayout
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Label text={'Confirm Password:'} />

      <NeoInputLayout
        secureTextEntry={true}
        style={styles.input}
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
      />

      <NeoButtonLayout
        title={'Submit'}
        disabled={!name || !email || !password || !passwordConfirmation}
        onPress={handleRegister}
      />

      <Label text={'Already have an Account!'} />

      <NeoButtonLayout title={'Go Back!'} onPress={handleGoBack} />
    </UI_Container>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
  },
  btn: {
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    color: '#900C3F',
    fontSize: 20,
  },
  input: {
    height: 40,
    marginVertical: 20,
    padding: 10,
    fontSize: 18,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  _MH: {
    marginHorizontal: wp('5%'),
  },
});
