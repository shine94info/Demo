import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Api = () => {
  const [phonecode, setUsername] = useState('');
  const [mobile, setMobile] = useState('');

  const handleLogin = () => {
    fetch('http://dev.tapgro.com/api/V1/sendotp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phonecode:'91',
        mobile: mobile,
        user_type:'local',
        action_type:'signup'

      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={mobile}
        onChangeText={(txt) => setMobile(txt)}
        placeholder="Mobile"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          marginBottom: 10,
          padding: 10,
        }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Api;




