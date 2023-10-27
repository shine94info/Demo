import React, { useState } from 'react';
import { View, Button } from 'react-native';
import CustomModal from './Modal'

const Screen2 = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Modal in Screen 2" onPress={openModal} />
      <CustomModal visible={modalVisible} onClose={closeModal} modalText="This is a modal in Screen 2!" />
    </View>
  );
};

export default Screen2;
