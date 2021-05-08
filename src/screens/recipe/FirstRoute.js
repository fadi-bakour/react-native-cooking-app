import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, ImageBackground, Image, ScrollView, StatusBar, FlatList, useWindowDimensions
  } from 'react-native';
 
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

  export default FirstRoute;