import React from 'react';
import {
  StyleSheet,
  Text, ScrollView
} from 'react-native';

const SecondRoute = ({ data }) => {
  return (
    <ScrollView style={{ margin: '5%' }}>
      <Text style={styles.ingredientsItem}>
        {data.strInstructions}
      </Text>
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  ingredientsItem: {fontSize:18,lineHeight:25} 
});

export default SecondRoute;