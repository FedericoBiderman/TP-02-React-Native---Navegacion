import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScreenA2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla A2</Text>
      <Button title="Ir a A1" onPress={() => navigation.navigate('ScreenA1')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ff0000' },
  text: { color: 'white', fontSize: 20 }
});

export default ScreenA2;