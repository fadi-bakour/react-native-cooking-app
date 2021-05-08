import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, ImageBackground, StatusBar, FlatList
} from 'react-native';
import { LogOut } from '../../actions/AuthActions';
import RenderItem from './RenderItem';
import ApiService from '../../services/ApiService'

const IndexRecipeScreen = ({ route, navigation }) => {
  const [item, setItems] = useState([])
  const { itemId } = route.params;
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    ApiService('/filter.php?c=' + itemId, 'get').then(function (response) {
      setItems(response.meals);
      setLoader(false);
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
        {loader ? (
          <Text>loader</Text>
        ) : (
            <FlatList
              nestedScrollEnabled
              data={item}
              numColumns={3}
              keyExtractor={item => item.idMeal}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={styles.categoryItem} onPress={() => navigation.navigate('Recipe', { itemId: item.strMeal })}>
                    <RenderItem item={item} />
                  </TouchableOpacity>
                )
              }
              }
            />
          )}
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
  topViewContainer: { flex: 0.25, backgroundColor: '#1d2126' },
  topViewText: { color: 'white', padding: '5%', fontSize: 35, maxWidth: '50%' },
  categorysContainer: { flex: 0.75, backgroundColor: '#f7f7f7' },
  categoryItem: { flex: 1, height: 150 },
});


export default IndexRecipeScreen;

