
import React from 'react';
import {
  StyleSheet,
  Text,
  View, Image
} from 'react-native';

const renderItem = ({ item }) => {

  return (
    <View style={styles.categoryItemInside}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex:0.3 }}>
          <Image
            style={styles.logo}
            source={{ uri: item.strMealThumb }}
          />
        </View>
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
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius:10,
  },
  categoryItemInside: { backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', margin: '5%', borderWidth: 3, flex: 1, borderRadius: 10 },
  categoryItemTitle: { color: 'black', fontSize: 15,margin:'5%' },
});

export default renderItem;