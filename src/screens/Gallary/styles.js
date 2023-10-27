import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const ImagePickerExample = () => {
  const [imagePath, setImagePath] = useState(null);
  const [Path, setPath] = useState(null);


  const selectFromGallery = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      maxWidth: 500,
      maxHeight: 500,
    };

   launchImageLibrary(options, (response) => {
    console.log('launchImageLibrary',response.assets[0].uri);
      if (response.assets[0].uri && response.assets[0].originalPath) {
        console.log('response.uri',response)
        setImagePath(response.assets[0].uri);
        setPath(response.assets[0].originalPath)
      }
    });
  };

  const takePhoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      maxWidth: 500,
      maxHeight: 500,
    };

   launchCamera(options, (response) => {
    console.log('launchImageLibrary',response.assets[0].uri);
    if (response.assets[0].uri) {
      console.log('response.uri',response)
      setImagePath(response.assets[0].uri);
    }
  });
};


  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Select from Gallery" onPress={selectFromGallery} />
        <Button title="Take Photo" onPress={takePhoto} />
      </View>
      
       <Image source={{ uri: imagePath }} style={styles.image} />
       <Text>{Path}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor:'red',
    resizeMode: 'cover',
  },
});

export default ImagePickerExample;
