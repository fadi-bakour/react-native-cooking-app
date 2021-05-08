import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, ImageBackground, Image, ScrollView, StatusBar, FlatList
} from 'react-native';
import { LogOut } from '../../actions/AuthActions';
import RenderItem from './RenderItem';
import axios from 'react-native-axios';

const IndexRecipeScreen = ({route, navigation }) => {
  const [item, setItems] = useState([])
  const { itemId } = route.params;
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+itemId)
      .then(function (response) {
        setItems(response.data.meals);
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
          numColumns={3}
          keyExtractor={item => item.idMeal}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.categoryItem} onPress={() => navigation.navigate('ShowRecipeScreen',{itemId: item.strMeal})}>
                <RenderItem item={item} />
              </TouchableOpacity>
            )
          }
          }
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
    margin: '5%',
    flex: 0.3
  },
  btnDiv: { alignItems: 'center', backgroundColor: '#ff9f1c', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5, margin: '2%', flex: 0.5 },
  btnDiv2: { alignItems: 'center', backgroundColor: '#1d2126', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5, margin: '2%', flex: 0.5 },
  btn: { color: 'white', fontSize: 18, fontWeight: '700' },
  topViewContainer: { flex: 0.25, backgroundColor: '#1d2126' },
  topViewText: { color: 'white', padding: '5%', fontSize: 35, maxWidth: '50%' },
  categorysContainer: { flex: 0.75, backgroundColor: '#f7f7f7' },
  categoryItem: {flex:1, height: 150 },
  categoryItemInside: { backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', margin: '5%', borderWidth: 1, flex: 1, borderRadius: 5 },
  categoryItemTitle: { color: 'black', fontSize: 15 },
  categoryItemInfo: { color: 'black', fontSize: 10 },
});


export default IndexRecipeScreen;

