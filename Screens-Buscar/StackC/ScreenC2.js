import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenC2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla C2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ff00ff' },
  text: { color: 'white', fontSize: 20 }
});

export default ScreenC2;
