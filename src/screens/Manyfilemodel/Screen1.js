import React, { useState } from 'react';
import { View, Button } from 'react-native';
import CustomModal from './Modal'
const Screen1 = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Modal in Screen 1" onPress={openModal} />
      <CustomModal visible={modalVisible} onClose={closeModal} modalText="This is a modal in Screen 1!" />
    </View>
  );
};

export default Screen1;
