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
import { Login } from '../../actions/AuthActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import apis from '../../apis/apis';

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    Token: state.authReducer.Token,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      reduxLogin: (email, password) =>
        apis.loginAuth(email, password),
    },
    dispatch,
  );

const SignInScreen = ({ navigation, reduxLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
        Log in to continue to our chicken wing community
      </Text>
      <View style={styles.input}>
        <Input
          placeholder="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'black' }}
          onChange={setEmail}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
      </View>
      <View style={styles.input}>
        <Input
          placeholder="Password"
          leftIcon={{ type: 'font-awesome', name: 'key', color: 'black' }}
          onChange={setPassword}
          secureTextEntry={true}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
      </View>
      <TouchableOpacity style={styles.ForgotPasswordDiv}>
        <Text style={styles.ForgotPassword} onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnDiv} onPress={() => reduxLogin({ email, password })}>
        <Text style={styles.btn}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SignUpDiv} onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.SignUp} >
          New User? Sign Up
        </Text>
      </TouchableOpacity>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'white'
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
  ForgotPasswordDiv: { alignSelf: 'flex-start', marginTop: '5%' },
  ForgotPassword: {
    color: 'black',
    marginLeft: '5%',
  },
  input: {height: 50, width: '90%', alignSelf: 'center', marginTop: '5%', borderRadius: 5,borderWidth:1 },
  btnDiv: { width: '90%', alignItems: 'center', backgroundColor: '#ff9f1c', alignSelf: 'center', height: 50, justifyContent: 'center', marginTop: '10%', borderRadius: 5 },
  btn: { color: 'white', fontSize: 22,fontWeight:'500' },
  SignUpDiv: { alignSelf: 'center', marginTop: '5%' },
  SignUp: { color: 'black', alignSelf: "center" }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

