import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ColorSelector = ({ color, setColor }: { color: string | null; setColor: (color: string) => void }) => {
  const colors = ['#FF5733', '#33FF57', '#3357FF'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Color</Text>
      <View style={styles.colorContainer}>
        {colors.map((c) => (
          <TouchableOpacity key={c} onPress={() => setColor(c)}>
            <View style={[styles.colorBox, { backgroundColor: c }, color === c && styles.selectedColor]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorContainer: {
    flexDirection: 'row',
  },
  colorBox: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedColor: {
    borderColor: 'tomato',
  },
});

export default ColorSelector;