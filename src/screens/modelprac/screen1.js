import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Modalscreen from './modalscreen';

const Screen1 = () => {
  const [modalvisible, setModalVisible] = useState(false);
  const [firstname, setfirstname] = useState(false);
  const [lastname, setlastname] = useState(false);

  const handledata = value => {
    setfirstname(value.firstname);
    setlastname(value.lastname);
    setModalVisible(false);
  };

  const Modalopen = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={Modalopen}>
        <Text>OPEN MODAL</Text>

        <Text>{firstname}</Text>
        <Text>{lastname}</Text>
      </TouchableOpacity>
      <Modalscreen
        visible={modalvisible}
        closemodel={closeModal}
        handledata={handledata}
      />
    </View>
  );
};

export default Screen1;
