import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('#ffffff'); // fundo inicial branco

  const mudarCor = () => {
    // cores aleatórias
    const cores = ['#FFCDD2', '#C8E6C9', '#BBDEFB', '#FFF9C4', '#D1C4E9'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    setBgColor(corAleatoria);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="Mudar cor de fundo 🎨" onPress={mudarCor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center',     // centraliza horizontalmente
  },
});
