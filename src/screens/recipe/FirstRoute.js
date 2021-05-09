import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

const FirstRoute = ({ data, ing }) => {
  return (
    <View style={{ margin: '3%' }}>
      <FlatList
        nestedScrollEnabled
        data={ing}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.ingredients}>
              <Text style={{ flex: 0.7 }}>{item.ingrediant}</Text>
              <Text style={{ flex: 0.3 }}>{item.value}</Text>
            </View>
          )
        }
        }
      />
    </View>

  )
}

const styles = StyleSheet.create({
  ingredients: { margin: '3%', justifyContent: 'center', flex: 1, flexDirection: 'row', borderWidth: 1, padding: '3%', borderRadius: 5 }
})

export default FirstRoute;