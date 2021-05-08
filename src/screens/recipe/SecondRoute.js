import React from 'react';
import {
  StyleSheet,
  Text, ScrollView
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
  ingredientsItem: { fontSize: 15, margin: '2%' }
});

export default SecondRoute;