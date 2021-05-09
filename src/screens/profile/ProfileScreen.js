import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, Image, StatusBar, TextInput
} from 'react-native';
import { LogOut } from '../../actions/AuthActions';
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
    reduxLogOut: () => dispatch(LogOut()),
  }
}

const ProfileScreen = ({ navigation, reduxLogOut }) => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor='white' />
      <View style={{ flex: 0.88 }}>
        <Image
          style={styles.logo}
          source={require('../../assets/profile.jpg')}
        />
      </View>
      <View style={{ flex: 0.12 }}>
        <TouchableOpacity style={styles.btnDiv} onPress={() => reduxLogOut()}>
          <Text style={styles.btn}>
            Log Out
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
    height: "100%",
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  btnDiv: { width: '50%', alignItems: 'center', backgroundColor: '#ff9f1c', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5, margin: '2%', },
  btn: { color: 'white', fontSize: 18, fontWeight: '700' },
  topViewContainer: { flex: 0.35, backgroundColor: '#1d2126', justifyContent: 'center' },
  categorysContainer: { flex: 0.75, backgroundColor: '#f7f7f7' },
  label: { fontSize: 20 },
  inputContainer: { margin: '2%', padding: '3%' },
  input: { borderWidth: 1, borderColor: 'black', marginTop: 7, height: 40, borderRadius: 5, paddingLeft: 8 }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

