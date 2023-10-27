import { View, Text } from 'react-native'
import React from 'react'

const SecondScreen = ({route}) => {
  const {customprop,test} = route.params;
  // const custompropfun = eval('(' + custompropfunString + ')');
  
   return (
    <View>
      <Text>{customprop}</Text>
      <Text>{test()}</Text>
    </View>
  )
}

export default SecondScreen;