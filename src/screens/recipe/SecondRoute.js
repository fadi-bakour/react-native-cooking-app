import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, ImageBackground, Image, ScrollView, StatusBar, FlatList, useWindowDimensions
  } from 'react-native';

const SecondRoute = ({ data }) => {
    return (
      <ScrollView style={{ marginTop: '2%' }}>
        <Text style={styles.ingredientsItem}>
          {data.strInstructions}
        </Text>
      </ScrollView>
    )
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
  
  export default SecondRoute;