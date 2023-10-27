import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';

const data = [
  {id: 1, name: 'Item 1'},
  {id: 2, name: 'Item 2'},
  {id: 3, name: 'Item 3'},
  {id: 4, name: 'Item 4'},
  {id: 5, name: 'Item 5'},
];

const Flatlisttask = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemPress = item => {
    if (selectedItems.includes(item)) {
      console.log('selectedItems', item);
      setSelectedItems(selectedItems.filter(selected => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const renderItem = ({item}) => {
    const isSelected = selectedItems.includes(item);
    console.log('isSelected', isSelected);
    return (
      <TouchableOpacity
        style={[styles.item, isSelected && styles.selectedItem]}
        onPress={() => handleItemPress(item)}>
        <Text style={isSelected && styles.selectedItemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      {selectedItems.length > 0 && (
        <View style={styles.selectedItemsContainer}>
          <Text>Selected items:</Text>
          {selectedItems.map(item => (
            <Text key={item.id}>{item.name}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedItem: {
    backgroundColor: 'lightblue',
  },
  selectedItemText: {
    color: 'white',
  },
  selectedItemsContainer: {
    marginTop: 20,
  },
});

export default Flatlisttask;
