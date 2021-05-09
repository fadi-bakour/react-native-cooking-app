
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const renderItem = ({ item }) => {
  let theColor ='rgb('+(Math.floor(Math.random()*56)+200)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';

  return (
    <View style={[styles.categoryItemInside, {backgroundColor: theColor}]}>
      <Image
        style={styles.logo}
        source={{ uri: item.strCategoryThumb }}
      />
      <Text style={styles.categoryItemTitle}>{item.strCategory} </Text>
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
    height: "50%",
    width: "100%",
    resizeMode: 'contain',
    alignSelf: 'center',
    maxHeight: '50%',
    margin: '5%'
  },
  categoryItem: { maxWidth: '50%', height: 200 },
  categoryItemInside: {justifyContent: 'center', alignItems: 'center', margin: '5%', borderWidth: 1, flex: 1, borderRadius: 10 },
  categoryItemTitle: { color: 'black', fontSize: 15 },
});


export default renderItem;