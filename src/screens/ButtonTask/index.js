import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonPress = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === 1 && { backgroundColor: 'yellow' },
        ]}
        onPress={() => handleButtonPress(1)}
      >
        <Text style={[styles.buttonText, selectedButton === 1 && { color: 'white' }]}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === 2 && { backgroundColor: 'yellow' },
        ]}
        onPress={() => handleButtonPress(2)}
      >
        <Text style={[styles.buttonText, selectedButton === 2 && { color: 'white' }]}>Button 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === 3 && { backgroundColor: 'yellow' },
        ]}
        onPress={() => handleButtonPress(3)}
      >
        <Text style={[styles.buttonText, selectedButton === 3 && { color: 'white' }]}>Button 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
});

export default ButtonComponent;
