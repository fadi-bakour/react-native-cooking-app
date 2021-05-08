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

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    Token: state.authReducer.Token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxLogin: () => dispatch(Login()),
  }
}



const SignInScreen = ({ navigation, reduxLogin }) => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/bg.jpg')} style={styles.image}>
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
            leftIcon={{ type: 'font-awesome', name: 'comment', color: 'white' }}
            onChange={setEmail}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder="Password"
            leftIcon={{ type: 'font-awesome', name: 'comment', color: 'white' }}
            onChange={setPassword}
            secureTextEntry={true}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
        </View>
        <TouchableOpacity style={styles.ForgotPasswordDiv}>
          <Text style={styles.ForgotPassword} >
            Forgot Password?
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnDiv}  onPress={() => reduxLogin()}>
          <Text style={styles.btn}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SignUpDiv} onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.SignUp} >
            New User? Sign Up
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

