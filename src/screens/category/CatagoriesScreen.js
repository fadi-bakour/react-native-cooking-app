import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, ImageBackground, StatusBar, FlatList
} from 'react-native';
import RenderItem from './RenderItem';

import ApiService from '../../services/ApiService'

import SplashScreen from 'react-native-splash-screen'


const Catagories = ({ navigation }) => {

  const [item, setItems] = useState([])

  useEffect(() => {
    ApiService('/categories.php', 'get').then(function (response) {
      setItems(response.categories);
      SplashScreen.hide();
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
              <TouchableOpacity style={styles.categoryItem} onPress={() => navigation.navigate('Recipes', { itemId: item.strCategory })}>
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
  topViewContainer: { flex: 0.25, backgroundColor: '#1d2126' },
  topViewText: { color: 'white', padding: '5%', fontSize: 35, maxWidth: '50%' },
  categorysContainer: { flex: 0.75, backgroundColor: '#f7f7f7' },
  categoryItem: { flex: 1, height: 200 },
});


export default Catagories;

