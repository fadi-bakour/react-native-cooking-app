import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';

import CatagoriesScreen from '../screens/category/CatagoriesScreen';
import RecipesScreen from '../screens/recipe/RecipesScreen';
import RecipeScreen from '../screens/recipe/RecipeScreen';


const Stack = createStackNavigator();


function BotNav() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Catagories" component={CatagoriesScreen} />
            <Stack.Screen name="Recipes" component={RecipesScreen} />
            <Stack.Screen name="Recipe" component={RecipeScreen} />
        </Stack.Navigator>
    );
}

export default BotNav;
