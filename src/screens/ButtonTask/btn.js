import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const ButtonScreen = () => {
  const [isselected, setIsselected] = useState(1);

  const handleButtonPress = buttonNumber => {
    setIsselected(buttonNumber);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{}}>
        <TouchableOpacity
           onPress={() => handleButtonPress(1)}
          style={[styles.notselected, isselected === 1 && styles.selectedbtn]}>
          <Text
            style={[
              styles.notselectedtext,
              isselected === 1 && styles.notselectedtext,
            ]}>
            Yes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleButtonPress(2)}
          style={[styles.notselected, isselected === 2 && styles.selectedbtn]}>
          <Text
            style={[
              styles.notselectedtext,
              isselected === 2 && styles.notselectedtext,
            ]}>
            no
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => handleButtonPress(3)}
        style={[styles.notselected, isselected === 3 && styles.selectedbtn]}>
        <Text
          style={[
            styles.notselectedtext,
            isselected === 3 && styles.notselectedtext,
          ]}>
          Yes
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonScreen;
const styles = StyleSheet.create({
  selectedbtn: {
    backgroundColor: 'yellow',
  },
  selectedtext: {
    color: 'white',
  },
  notselected: {
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'black',

    height: 40,
    width: 40,
  },
  notselectedtext: {
    color: 'black',
  },
});
