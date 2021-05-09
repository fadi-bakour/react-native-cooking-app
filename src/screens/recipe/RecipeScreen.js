import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View, Image, StatusBar, useWindowDimensions
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ApiService from '../../services/ApiService';
import FirstRoute from './FirstRoute';
import SecondRoute from './SecondRoute';

const ShowRecipeScreen = ({ route }) => {

  const [item, setItems] = useState([]);
  const [ing, setIng] = useState([]);

  var ingredients = [];

  const { itemId } = route.params;
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Ingredients' },
    { key: 'second', title: 'Step By Step' },
  ]);

  useEffect(() => {
    ApiService('/search.php?s=' + itemId, 'get').then(function (response) {
      for (let i = 1; i < 21; i++) {
        let meals = response.meals[0];
        let mealIng = meals['strIngredient' + i];
        let mealVal = meals['strMeasure' + i];
        if (mealIng != '') {
          var obg = { 'id': i, 'ingrediant': mealIng, 'value': mealVal }
          ingredients.push(obg);
          // ingredientsVal.push(mealVal);
        } else {
          break;
        }
      }
      setIng(ingredients);
      // setVal(ingredientsVal);
      setItems(response.meals[0]);

    })
      .catch(function (error) {
        console.log(error);
      });

  }, []);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute data={item} ing={ing} />; // passing data as data prop
      case 'second':
        return <SecondRoute data={item} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor='#1d2126' />
      <View style={styles.RecipeImageContainer}>
        <Image
          style={styles.logo}
          source={{ uri: item.strMealThumb }} />
        <View style={styles.topViewContainerInner}>
          <Text style={styles.categoryItemTitle}>{item.strMeal} </Text>
          <Text style={styles.categoryItemInfo}>{item.strArea}</Text>
        </View>
      </View>

      <View style={styles.categorysContainer}>
        <TabView
          renderTabBar={props => (
            <TabBar
              {...props}
              renderLabel={({ route, color }) => (
                <Text style={{ color: 'black', margin: 8 }}>
                  {route.title}
                </Text>
              )}
              style={{ backgroundColor: 'white' }}
              indicatorStyle={{ backgroundColor: 'blue', height: 2, elevation: 0 }}


            />
          )}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}

        />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  logo: {
    alignSelf: 'center',
    width: 150,
    height: '70%',
    resizeMode: 'contain',
    borderRadius: 200,
  },
  categorysContainer: { flex: 0.6 },
  categoryItemTitle: { color: 'black', fontSize: 25,textAlign:'center' },
  categoryItemInfo: { color: 'black', fontSize: 20,textAlign:'center' },
  RecipeImageContainer: { flex: 0.4, padding: '5%', backgroundColor: 'white' },
});


export default ShowRecipeScreen;

