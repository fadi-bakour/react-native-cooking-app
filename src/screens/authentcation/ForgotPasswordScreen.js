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

const ForgotPasswordScreen = ({ navigation }) => {
  const [Email, setEmail] = useState('')
  return (
    <View style={styles.container}>
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
          leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'black' }}
          onChange={setEmail}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
      </View>
      <TouchableOpacity style={styles.btnDiv}>
        <Text style={styles.btn}>Proceed</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SignUpDiv}>
        <Text style={styles.SignUp} onPress={() => navigation.navigate('SignInScreen')}>
          back to login!
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



export default ForgotPasswordScreen;

