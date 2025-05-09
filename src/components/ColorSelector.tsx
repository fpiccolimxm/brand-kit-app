import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import ColorPicker, { Panel1, HueSlider } from 'reanimated-color-picker';

const ColorSelector = ({ color, setColor }: { color: string | null; setColor: (color: string) => void }) => {
  const [colors, setColors] = useState(['#FF5733', '#33FF57', '#3357FF']); // Colori predefiniti
  const [isPickerVisible, setIsPickerVisible] = useState(false); // Stato per il color picker
  const [tempColor, setTempColor] = useState<string>(color || '#000000'); // Colore temporaneo selezionato

  const addCustomColor = (newColor: string) => {
    if (!colors.includes(newColor)) {
      setColors((prevColors) => [...prevColors, newColor]); // Aggiungi il nuovo colore all'array
    }
    setColor(newColor); // Imposta il nuovo colore come selezionato
  };

  const openPicker = () => {
    setTempColor(color || '#000000'); // Sincronizza il colore temporaneo con il colore attuale
    setIsPickerVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Color</Text>
      <View style={styles.colorContainer}>
        {colors.map((c) => (
          <TouchableOpacity key={c} onPress={() => setColor(c)}>
            <View style={[styles.colorBox, { backgroundColor: c }, color === c && styles.selectedColor]} />
          </TouchableOpacity>
        ))}
        {/* Pulsante per aggiungere un colore personalizzato */}
        <TouchableOpacity onPress={openPicker}>
          <View style={styles.addColorBox}>
            <Text style={styles.addColorText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Modal per il color picker */}
      <Modal
        visible={isPickerVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsPickerVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ColorPicker
            value={tempColor}
            onChange={(selectedColor) => setTempColor(selectedColor.hex)} // Aggiorna il colore temporaneo
            style={{ width: 300, height: 300 }}
          >
            {/* Area di selezione dei colori */}
            <Panel1 style={{ flex: 1 }} />

            {/* Slider per la tonalità */}
            <HueSlider style={{ marginTop: 20, height: 20, borderRadius: 10 }} />
          </ColorPicker>

          {/* Pulsante "Choose" per confermare il colore */}
          <TouchableOpacity
            style={styles.chooseButton}
            onPress={() => {
              addCustomColor(tempColor); // Aggiungi il colore selezionato
              setIsPickerVisible(false); // Chiudi il color picker
            }}
          >
            <Text style={styles.chooseButtonText}>Choose</Text>
          </TouchableOpacity>

          {/* Pulsante "Close" per chiudere il picker */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsPickerVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    flexWrap: 'wrap',
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
  addColorBox: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  addColorText: {
    fontSize: 24,
    color: '#aaa',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  chooseButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  chooseButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ColorSelector;