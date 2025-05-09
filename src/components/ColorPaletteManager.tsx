import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import ReanimatedColorPicker from 'reanimated-color-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ColorPaletteManager = () => {
    const [colors, setColors] = useState<string[]>([]);
    const [selectedColor, setSelectedColor] = useState<string>('#ffffff');

    const addColor = () => {
        if (!colors.includes(selectedColor)) {
            const updatedColors = [...colors, selectedColor];
            setColors(updatedColors);
            savePalette(updatedColors);
        }
    };

    const removeColor = (colorToRemove: string) => {
        const updatedColors = colors.filter(color => color !== colorToRemove);
        setColors(updatedColors);
        savePalette(updatedColors);
    };

    const savePalette = async (palette: string[]) => {
        try {
            await AsyncStorage.setItem('@color_palette', JSON.stringify(palette));
        } catch (error) {
            console.error('Error saving palette', error);
        }
    };

    const loadPalette = async () => {
        try {
            const savedPalette = await AsyncStorage.getItem('@color_palette');
            if (savedPalette) {
                setColors(JSON.parse(savedPalette));
            }
        } catch (error) {
            console.error('Error loading palette', error);
        }
    };

    React.useEffect(() => {
        loadPalette();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Color Palette Manager</Text>
            <ReanimatedColorPicker
                value={selectedColor}
                onChange={(color) => setSelectedColor(color.hex)}
                style={styles.colorPicker}
            />
            <TouchableOpacity style={styles.addButton} onPress={addColor}>
                <Text style={styles.addButtonText}>Add Color</Text>
            </TouchableOpacity>
            <FlatList
                data={colors}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.colorSwatch, { backgroundColor: item }]}
                        onPress={() => removeColor(item)}
                    />
                )}
                horizontal
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    colorPicker: {
        height: 300,
        width: '100%',
    },
    addButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    addButtonText: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    colorSwatch: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 5,
    },
});

export default ColorPaletteManager;