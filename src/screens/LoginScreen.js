import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLogIn} from '../redux/slices/loginSlice';
import {loginService} from '../services/loginServices';

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
    <View style={styles.container}>
      <Text style={{marginBottom: 20, fontSize: 15}}>Login Here!</Text>
      <View>
        <Text style={{fontSize: 15}}>Email:</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      </View>
      <View>
        <Text style={{fontSize: 15}}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        disabled={!email || !password}
        onPress={handleLogin}
        style={[
          styles.btn,
          styles.flexCenter,
          (!email || !password) && {backgroundColor: '#DAF7A6'},
        ]}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
      <Text style={{marginVertical: 20, fontSize: 15}}>
        Or Create a New Account!
      </Text>
      <TouchableOpacity
        onPress={handleCreateAccount}
        style={[styles.btn, styles.flexCenter]}>
        <Text style={styles.text}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: '#900C3F',
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  input: {
    height: 40,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#900C3F',
    padding: 10,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
