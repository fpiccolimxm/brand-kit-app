import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FontSelector = ({ font, setFont }: { font: string | null; setFont: (font: string) => void }) => {
  const fonts = ['CalSans-Regular', 'Roboto-Medium', 'Tagesschrift-Regular'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Font</Text>
      {fonts.map((f) => (
        <TouchableOpacity key={f} onPress={() => setFont(f)}>
          <Text style={[styles.fontItem, font === f && styles.selectedFont]}>{f}</Text>
        </TouchableOpacity>
      ))}
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
  fontItem: {
    fontSize: 16,
    marginVertical: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedFont: {
    borderColor: 'tomato',
  },
});

export default FontSelector;