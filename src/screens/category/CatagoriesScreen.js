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
        <Text style={styles.headerTitle}>What would you like to eat?</Text>
        <Text style={styles.headerDec}>Choose one of our Catagories to start your cooking journey with us</Text>
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
  topViewContainer: { flex: 0.2 },
  categorysContainer: { flex: 0.8 },
  categoryItem: { flex: 1, height: 200 },
  headerTitle: { fontSize: 25, marginTop: '5%', alignSelf: 'center' },
  headerDec: { fontSize: 15, alignSelf: 'center', marginTop: '3%', textAlign: 'center' }
});


export default Catagories;

