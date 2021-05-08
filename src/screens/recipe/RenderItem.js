
import React from 'react';
import {
  StyleSheet,
  Text,
  View, Image
} from 'react-native';

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
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  logo: {
    height: 100,
    width: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    maxHeight: '50%',
    margin: '5%',
  },
  categoryItemInside: { backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', margin: '5%', borderWidth: 1, flex: 1, borderRadius: 5 },
  categoryItemTitle: { color: 'black', fontSize: 15 },
});

export default renderItem;