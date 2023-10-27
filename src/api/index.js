import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const Apicallling = () => {
    const [data,setData] = useState('');
    useEffect(() =>
    {
        Apicallingfun();
    },[])

    const Apicallingfun = async() =>
    {
        try{
            const response = await fetch('https://reactnative.dev/movies.json')
            console.log('response',response)
            const json= await response.json();
          

            setData(json.movies);

        }
        catch(error)
        {
            console.log(error)
        }

    }
  return (
    <View>
       <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
    </View>
  )
}

export default Apicallling;