import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, ImageBackground, StatusBar, FlatList, Image
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
          <Text style={styles.topViewText}>
            We get bigger with your support
        </Text>
      </View>
      <View style={styles.categorysContainer}>
        {loader ? (
          <Image
            style={{alignSelf:'center' }}
            source={ require('../../assets/loader.gif') }
          />
        ) : (
          <FlatList
            nestedScrollEnabled
            data={item}
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
  topViewContainer: { flex: 0.2, backgroundColor: '#1d2126',justifyContent:'center' },
  topViewText: { color: 'white', fontSize: 35,textAlign:'center' },
  categorysContainer: { flex: 0.8,justifyContent:'center' },
  categoryItem: { flex: 1, height: 150 },
});


export default IndexRecipeScreen;

