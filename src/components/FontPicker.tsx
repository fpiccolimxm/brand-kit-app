import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { fonts } from '../utils/colorUtils'; // Assuming you have a list of fonts in colorUtils

interface FontPickerProps {
    onSelectFont: (font: string) => void;
}

const FontPicker: React.FC<FontPickerProps> = ({ onSelectFont }) => {
    const [loadedFonts, setLoadedFonts] = useState<string[]>([]);
    const [selectedFont, setSelectedFont] = useState<string | null>(null);

    useEffect(() => {
        const loadFonts = async () => {
            const fontPromises = fonts.map(font => Font.loadAsync(font));
            await Promise.all(fontPromises);
            setLoadedFonts(fonts.map(font => font.fontFamily));
        };

        loadFonts();
    }, []);

    const handleFontSelect = (font: string): void => {
        setSelectedFont(font);
        onSelectFont(font);
    };

    const renderFontItem = ({ item }: { item: string }) => (
        <TouchableOpacity onPress={() => handleFontSelect(item)}>
            <Text style={[styles.fontItem, { fontFamily: item }]}>
                {item} - Sample Text
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select a Font</Text>
            <FlatList
                data={loadedFonts}
                renderItem={renderFontItem}
                keyExtractor={(item) => item}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    fontItem: {
        fontSize: 18,
        padding: 10,
    },
});

export default FontPicker;