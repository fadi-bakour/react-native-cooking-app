
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, ImageBackground, Image, ScrollView, StatusBar, FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { LogOut } from '../actions/AuthActions';
import { useNavigation } from '@react-navigation/native';

const renderItem = ({ item }) => {

  return (
    <View style={styles.categoryItemInside}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.logo}
          source={{ uri: item.strMealThumb }}
        />
        <View style={{ flex: 0.7, justifyContent: 'center' }}>
          <Text style={styles.categoryItemTitle}>{item.strMeal} </Text>
        </View>
      </View>
    </View>
  )
}

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
    height:100 ,
    width:50,
    resizeMode: 'contain',
    alignSelf: 'center',
    maxHeight: '50%',
    margin: '5%',
  },
  btnDiv: { alignItems: 'center', backgroundColor: '#ff9f1c', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5, margin: '2%', flex: 0.5 },
  btnDiv2: { alignItems: 'center', backgroundColor: '#ff9f1c', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5, margin: '2%', flex: 0.5 },
  btn: { color: 'white', fontSize: 18, fontWeight: '700' },
  topViewContainer: { flex: 0.25, backgroundColor: '#1d2126' },
  topViewText: { color: 'white', padding: '5%', fontSize: 35, maxWidth: '50%' },
  categorysContainer: { flex: 0.6, backgroundColor: '#f7f7f7' },
  categoryItem: { width: '100%', height: 150 },
  categoryItemInside: { backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', margin: '5%', borderWidth: 1, flex: 1, borderRadius: 5 },
  categoryItemTitle: { color: 'black', fontSize: 15 },
  categoryItemInfo: { color: 'black', fontSize: 10 },
  angelsBtnContainer: { flex: 0.15, justifyContent: 'center', backgroundColor: '#f7f7f7' },
});

export default renderItem;