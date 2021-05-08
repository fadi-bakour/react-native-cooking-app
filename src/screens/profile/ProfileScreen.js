import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, Image, ScrollView, StatusBar, TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { LogOut } from '../../actions/AuthActions';

const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    Token: state.Token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    LogOut: dispatch(LogOut())
  }
}


const ProfileScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor='#1d2126' />
      <View style={styles.topViewContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.categorysContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input}
            value='Fadi.Bakout101@gmail.com'
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input}
            value='Fadi.Bakout101@gmail.com'
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput style={styles.input}
            value='Fadi.Bakout101@gmail.com'
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.btnDiv}>
          <Text style={styles.btn}>
            Save
            </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  logo: {
    height: "50%",
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  btnDiv: { width: '50%', alignItems: 'center', backgroundColor: '#ff9f1c', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5, margin: '2%', },
  btn: { color: 'white', fontSize: 18, fontWeight: '700' },
  topViewContainer: { flex: 0.35, backgroundColor: '#1d2126', justifyContent: 'center' },
  topViewText: { color: 'white', padding: '5%', fontSize: 35, maxWidth: '50%' },
  categorysContainer: { flex: 0.75, backgroundColor: '#f7f7f7' },
  categoryItem: { maxWidth: '50%', height: 200 },
  categoryItemInside: { backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', margin: '5%', borderWidth: 1, flex: 1, borderRadius: 5 },
  categoryItemTitle: { color: 'black', fontSize: 15 },
  categoryItemInfo: { color: 'black', fontSize: 10, textAlign: 'center', padding: 5 },
  label: { fontSize: 20 },
  inputContainer: { margin: '2%', padding: '3%' },
  input: { borderWidth: 1, borderColor: 'black', marginTop: 7, height: 40, borderRadius: 5, paddingLeft: 8 }
});


export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

