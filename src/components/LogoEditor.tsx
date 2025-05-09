import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import ReanimatedColorPicker from 'reanimated-color-picker';
import useAsyncStorage from '../hooks/useAsyncStorage';
import FontPicker from './FontPicker';

const LogoEditor = () => {
    const [brandName, setBrandName] = useState('');
    const [selectedFont, setSelectedFont] = useState('');
    const [selectedColor, setSelectedColor] = useState('#000000');
    const { setValue } = useAsyncStorage('logos');

    const handleSaveLogo = () => {
        const logoData = {
            brandName,
            selectedFont,
            selectedColor,
        };
        setValue(logoData);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter Brand Name"
                value={brandName}
                onChangeText={setBrandName}
            />
            <FontPicker onSelectFont={setSelectedFont} />
            <ReanimatedColorPicker
                value={selectedColor}
                onChange={(color) => setSelectedColor(color.hex)}
                style={styles.colorPicker}
            />
            <Button title="Save Logo" onPress={handleSaveLogo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    colorPicker: {
        height: 300,
        width: '100%',
        marginBottom: 20,
    },
});

export default LogoEditor;