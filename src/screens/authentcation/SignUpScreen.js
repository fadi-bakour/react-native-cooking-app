import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { Input } from 'react-native-elements';

const SignUpScreen = ({navigation}) => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [CPassword, setCPassword] = useState('')

  return (
    <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />
        <Text style={styles.Title}>
          Welcome to our chicken wing
      </Text>
        <Text style={styles.SubTitle} >
          Sign up to join our chicken wing community
      </Text>
        <View style={styles.input}>
          <Input
            placeholder="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'black' }}
            onChange={setEmail}
            inputContainerStyle={{borderBottomWidth:0}}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder="Password"
            leftIcon={{ type: 'font-awesome', name: 'key', color: 'black' }}
            onChange={setPassword}
            secureTextEntry={true}
            inputContainerStyle={{borderBottomWidth:0}}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder="Conform Password"
            leftIcon={{ type: 'font-awesome', name: 'key', color: 'black' }}
            onChange={setCPassword}
            secureTextEntry={true}
            inputContainerStyle={{borderBottomWidth:0}}
          />
        </View>
        <TouchableOpacity style={styles.btnDiv}>
          <Text style={styles.btn}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SignUpDiv} onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.SignUp} >
            Already have account? Sign in
        </Text>
        </TouchableOpacity>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  logo: {
    width: "33%",
    resizeMode: 'contain',
    alignSelf: 'center',
    maxHeight: '20%',
  },
  Title: { color: 'black', alignSelf: 'center', fontSize: 20, marginTop: '10%' },
  SubTitle: { color: 'black', alignSelf: 'center', fontSize: 15 },
  input: { height: 50, width: '90%', alignSelf: 'center', marginTop: '5%', borderRadius: 5,borderWidth:1 },
  btnDiv: { width: '90%', alignItems: 'center', backgroundColor: '#ff9f1c', alignSelf: 'center', height: 50, justifyContent: 'center', marginTop: '10%', borderRadius: 5 },
  btn: { color: 'white', fontSize: 22,fontWeight:'500' },
  SignUpDiv: { alignSelf: 'center', marginTop: '5%' },
  SignUp: { color: 'black', alignSelf: "center" }
});



export default SignUpScreen;

