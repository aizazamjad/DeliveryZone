import React, {useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import NeoButtonLayout from '../components/NeoButtonLayout';
import NeoInputLayout from '../components/NeoInputLayout';
import {setLogIn} from '../redux/slices/loginSlice';
import {loginService} from '../services/loginServices';
import Logo from '../components/Logo';
import UI_Container from '../components/UI_Container';
import Label from '../components/Label';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = async () => {
    const user = {
      email,
      password,
    };

    const result = await loginService(user);

    if (result.token) {
      dispatch(setLogIn(result));
    } else {
      Alert.alert('Something went wrong!!!');
    }
  };

  const handleCreateAccount = () => {
    navigation.navigate('Register');
  };

  return (
    <UI_Container>
      <Logo />

      <Label text={'Login Here!'} />

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

      <NeoButtonLayout
        title={'Sign In'}
        disabled={!email || !password}
        onPress={handleLogin}
      />

      <Label text={'Or Create a New Account!'} />

      <NeoButtonLayout title={'Create Account'} onPress={handleCreateAccount} />
    </UI_Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#900C3F',
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
});
