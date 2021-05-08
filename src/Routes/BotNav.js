import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';

import CatagoriesScreen from '../screens/category/IndexCategoryScreen';
import IndexRecipeScreen from '../screens/recipe/IndexRecipeScreen';
import ShowRecipeScreen from '../screens/recipe/ShowRecipeScreen';


const Stack = createStackNavigator();


function BotNav() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Catagories" component={CatagoriesScreen} />
            <Stack.Screen name="IndexRecipeScreen" component={IndexRecipeScreen} />
            <Stack.Screen name="ShowRecipeScreen" component={ShowRecipeScreen} />
        </Stack.Navigator>
    );
}

export default BotNav;
