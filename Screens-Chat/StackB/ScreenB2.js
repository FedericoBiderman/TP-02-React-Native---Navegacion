import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ScreenB2 = () => {
  const route = useRoute();
  const { itemId } = route.params;
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla B2 - Item ID: {itemId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#044a16' },
  text: { color: 'white', fontSize: 20 }
});

export default ScreenB2;
