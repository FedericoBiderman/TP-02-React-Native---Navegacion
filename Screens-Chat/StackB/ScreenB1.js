import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ScreenB1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla B1</Text>
      <Button title="Ir a B2" onPress={() => navigation.navigate('ScreenB2', { itemId: 1 })} />
      <Ionicons name="chatbubble-ellipses-outline" size={50} color="white" onPress={() => alert('Presionaste el icono!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#044a16' },
  text: { color: 'white', fontSize: 20 }
});

export default ScreenB1;