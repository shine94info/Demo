import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import ModalScreen from './screen2';

const FirstScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  
    const sendDataToModal = () => {
      setModalVisible(true);
    };
  
    const handleData = (data) => {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setModalVisible(false);
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={sendDataToModal}>
          <Text style={styles.buttonText}>Open Modal</Text>
        </TouchableOpacity>
        <Text style={styles.text}>First Name: {firstName}</Text>
        <Text style={styles.text}>Last Name: {lastName}</Text>
        <ModalScreen modalVisible={modalVisible} handleData={handleData} />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default FirstScreen;
