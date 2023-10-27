import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const Modalscreen = (props) => {
    const {visible,closemodel,handledata} =props;
    const [firstname,setfirstname] = useState(false);
  const [lastname,setlastname] = useState(false);

  const handlebackdata = () =>
  {
    handledata({firstname,lastname});
    
  }
    
  return (
    <View>
    <Modal 
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        handledata({firstName: '', lastName: ''});
      }}
    >
        <View style={{height:100,width:100}}>
        <TextInput value={firstname} onChangeText={(txt) => setfirstname(txt)}/>
        <TextInput value={lastname} onChangeText={(txt) => setlastname(txt)}/>
        <TouchableOpacity onPress = {handlebackdata}>
        <Text>close</Text>
        </TouchableOpacity>
        </View>
      

    </Modal>
    </View>
  )
}

export default Modalscreen;