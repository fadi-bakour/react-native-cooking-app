import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ tabBarVisible: false });
  }, []);
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Catagories')}>
        <Text>test</Text>
      </TouchableOpacity>
    </View>
  );
};

StyleSheet.create;



export default HomeScreen;

