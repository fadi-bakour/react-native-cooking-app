import React, { useState,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, ImageBackground, Image, ScrollView, StatusBar, FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { LogOut } from '../../actions/AuthActions';
import { useNavigation } from '@react-navigation/native';
import RenderItem from './RenderItem';

import axios from 'react-native-axios';

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


const Catagories = ({ navigation }) => {

  const [item, setItems] = useState([])

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(function (response) {
      setItems(response.data.categories);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }, []);
  


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor='#1d2126' />
      <View style={styles.topViewContainer}>
        <ImageBackground source={require('../../assets/bg.jpg')} style={styles.image}>
          <Text style={styles.topViewText}>
            We get bigger with your support
        </Text>
        </ImageBackground>
      </View>
      <View style={styles.categorysContainer}>
        <FlatList
          nestedScrollEnabled
          data={item}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.categoryItem} onPress={() => navigation.navigate('IndexRecipeScreen',{itemId: item.strCategory})}>
                <RenderItem item={item} />
              </TouchableOpacity>
            )
          }
          }
          keyExtractor={item => item.idCategory}
          numColumns={2}
        />
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
    maxHeight: '50%',
    margin: '5%'
  },
  btnDiv: { width: '50%', alignItems: 'center', backgroundColor: '#ff9f1c', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5, margin: '2%', },
  btn: { color: 'white', fontSize: 18, fontWeight: '700' },
  topViewContainer: { flex: 0.25, backgroundColor: '#1d2126' },
  topViewText: { color: 'white', padding: '5%', fontSize: 35, maxWidth: '50%' },
  categorysContainer: { flex: 0.75, backgroundColor: '#f7f7f7' },
  categoryItem: { flex:1, height: 200 },
  categoryItemInside: { backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', margin: '5%', borderWidth: 1, flex: 1, borderRadius: 5 },
  categoryItemTitle: { color: 'black', fontSize: 15 },
  categoryItemInfo: { color: 'black', fontSize: 10, textAlign: 'center', padding: 5 },
});


export default connect(mapStateToProps, mapDispatchToProps)(Catagories);

