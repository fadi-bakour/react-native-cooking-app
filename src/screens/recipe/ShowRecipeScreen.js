import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, ImageBackground, Image, ScrollView, StatusBar, FlatList, useWindowDimensions
} from 'react-native';
import { connect } from 'react-redux';
import { LogOut } from '../../actions/AuthActions';
import RenderItem from './RenderItem';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
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



const FirstRoute = ({ data, ing }) => {
  console.log(ing);
  return (
    <FlatList
      nestedScrollEnabled
      data={ing}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{item.ingrediant} : {item.value}</Text>
          </View>
        )
      }
      }
    />
  )
}

const SecondRoute = ({ data }) => {
  return (
    <ScrollView style={{ marginTop: '2%' }}>
      <Text style={styles.ingredientsItem}>
        {data.strInstructions}
      </Text>
    </ScrollView>
  )
};

const ShowRecipeScreen = ({ route }) => {

  const [item, setItems] = useState([]);
  const [ing, setIng] = useState([]);
  const [val, setVal] = useState([]);

  var ingredients = [];
  var ingredientsVal = [];

  const { itemId } = route.params;
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Ingredients' },
    { key: 'second', title: 'Step By Step' },
  ]);



  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + itemId)
      .then(function (response) {
        for (let i = 1; i < 21; i++) {
          let meals = response.data.meals[0];
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
        setItems(response.data.meals[0]);
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
        <View style={styles.topViewContainerInner}>
          <Text style={styles.categoryItemTitle}>{item.strMeal} </Text>
          <Text style={styles.categoryItemInfo}>{item.strArea}</Text>
        </View>
        <Image
          style={styles.logo}
          source={{ uri: item.strMealThumb }} />
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
    alignSelf: 'flex-end',
    width:150,
    height:'60%',
    resizeMode:'contain',
    borderRadius: 200,
  },
  btnDiv: { alignItems: 'center', backgroundColor: '#ff9f1c', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5, margin: '2%', flex: 0.5 },
  btnDiv2: { alignItems: 'center', backgroundColor: '#1d2126', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5, margin: '2%', flex: 0.5 },
  btn: { color: 'white', fontSize: 18, fontWeight: '700' },
  topViewContainerInner: {  },
  topViewText: { color: 'white', fontSize: 35, maxWidth: '50%' },
  categorysContainer: { flex: 0.7, backgroundColor: '#f7f7f7' },
  categoryItem: { width: '100%', height: 150 },
  categoryItemInside: { backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', margin: '5%', flex: 1 },
  categoryItemTitle: { color: 'white', fontSize: 25 },
  categoryItemInfo: { color: 'white', fontSize: 15 },
  RecipeImageContainer: { flex: 0.3, backgroundColor: '#1d2126',padding: '5%' },
  ingredientsItem: { fontSize: 15, margin: '2%' }
});


export default connect(mapStateToProps, mapDispatchToProps)(ShowRecipeScreen);

