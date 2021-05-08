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

const ForgotPasswordScreen = ({navigation}) => {
  const [Email, setEmail] = useState('')
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/bg.jpg')} style={styles.image}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />
        <Text style={styles.Title}>
          Forgot your password?
      </Text>
        <Text style={styles.SubTitle} >
          Enter your email and click Proceed, if you are registered with us we will send a reset password link to your email 
      </Text>
        <View style={styles.input}>
          <Input
            placeholder="Email"
            leftIcon={{ type: 'font-awesome', name: 'comment', color: 'white' }}
            onChange={setEmail}
            inputContainerStyle={{borderBottomWidth:0}}
          />
        </View>
        <TouchableOpacity style={styles.btnDiv}>
          <Text style={styles.btn}>Proceed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SignUpDiv}>
          <Text style={styles.SignUp}   onPress={() => navigation.navigate('SignInScreen')}>
            back to login!
        </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View >
  );
};

const styles = StyleSheet.create({
  Color1: {
    color: '#ff9f1c',
  },
  Color2: {
    color: '#1d2126'
  },
  container: {
    backgroundColor: '#1d2126',
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
  Title: { color: 'white', alignSelf: 'center', fontSize: 20, marginTop: '10%' },
  SubTitle: { color: 'white', alignSelf: 'center', fontSize: 15 },
  ForgotPasswordDiv: { alignSelf: 'flex-start', marginTop: '5%' },
  ForgotPassword: {
    color: 'white',
    marginLeft: '5%',
  },
  input: { backgroundColor: 'white', height: 50, width: '90%', alignSelf: 'center', marginTop: '5%', borderRadius: 5 },
  btnDiv: { width: '90%', alignItems: 'center', backgroundColor: '#ff9f1c', alignSelf: 'center', height: 50, justifyContent: 'center', marginTop: '10%', borderRadius: 5 },
  btn: { color: 'white', fontSize: 18 },
  SignUpDiv: { alignSelf: 'center', marginTop: '5%' },
  SignUp: { color: 'white', alignSelf: "center" }
});



export default ForgotPasswordScreen;

