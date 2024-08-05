import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScreenD2 = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla D2</Text>
      <TextInput style={styles.input} placeholder="Nombre" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Button title="Enviar datos a D1" onPress={() => navigation.navigate('ScreenD1', { name, email })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0000ff' },
  text: { color: 'white', fontSize: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, color: 'white', paddingHorizontal: 10, width: '80%' }
});

export default ScreenD2;
