import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export const NoteScreen = ({user}) => {
    const [greet ,setGreet] = useState('Evening');
  return (
    <View style={styles.container}>
      <Text>{ `Good ${greet} ${user.name}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:
    {
        flex:1
    }
})