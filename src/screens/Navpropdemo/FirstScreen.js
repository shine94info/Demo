import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SexondScreen = ({navigation}) => {
  const navigateToSecondScreen = () => {
    // navigation.navigate('SecondScreen', {customProp: 'Hello from FirstScreen'});
const test = ()=>{
  return "hello111";
}
    navigation.navigate('SecondScreen', {
        customprop: 'hiiii',
        custompropnum: 1111,
        test:test
     
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={navigateToSecondScreen}>
        <Text>Go to Second Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SexondScreen;
