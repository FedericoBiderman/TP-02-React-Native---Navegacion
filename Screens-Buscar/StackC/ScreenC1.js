import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScreenC1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla C1</Text>
      <Button title="Ir a C2" onPress={() => navigation.navigate('ScreenC2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ff00ff' },
  text: { color: 'white', fontSize: 20 }
});

export default ScreenC1;