import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScreenD1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla D1</Text>
      <Button title="Ir a D2" onPress={() => navigation.navigate('ScreenD2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0000ff' },
  text: { color: 'white', fontSize: 20 }
});

export default ScreenD1;
