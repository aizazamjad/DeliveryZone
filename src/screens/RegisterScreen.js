import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
      navigation.goBack();
    } else {
      Alert.alert('Something went wrong!!!');
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 20, fontSize: 15}}>Register Here!</Text>
      <View>
        <Text style={{fontSize: 15}}>Name:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>
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
      <View>
        <Text style={{fontSize: 15}}>Confirm Password:</Text>
        <TextInput
          style={styles.input}
          value={passwordConfirmation}
          onChangeText={setPasswordConfirmation}
        />
      </View>
      <TouchableOpacity
        disabled={!name || !email || !password || !passwordConfirmation}
        onPress={handleRegister}
        style={[
          styles.btn,
          styles.flexCenter,
          (!name || !email || !password || !passwordConfirmation) && {
            backgroundColor: '#DAF7A6',
          },
        ]}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      <Text style={{marginVertical: 20, fontSize: 15}}>
        Already have an Account!
      </Text>
      <TouchableOpacity
        onPress={handleGoBack}
        style={[styles.btn, styles.flexCenter]}>
        <Text style={styles.text}>Go Back!</Text>
      </TouchableOpacity>
    </View>
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
