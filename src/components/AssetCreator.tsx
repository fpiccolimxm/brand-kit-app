import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';
import ImageSelector from './ImageSelector';
import ColorSelector from './ColorSelector';
import FontSelector from './FontSelector';
import { fonts } from '../utils/colorUtils'; // Importa i font
import * as SplashScreen from 'expo-splash-screen';

const AssetCreator = ({ navigation }: { navigation: any }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [logo, setLogo] = useState<any>(null); // Può essere un'immagine locale o remota
  const [color, setColor] = useState<string | null>('#000000');
  const [font, setFont] = useState<string | null>('CalSans-Regular');
  const [title, setTitle] = useState<string>('Preview Title');

  useEffect(() => {
    // Impedisce che la splash screen si nasconda automaticamente
    SplashScreen.preventAutoHideAsync();
  }, []);

  const loadFonts = async () => {
    const fontMap = fonts.reduce((acc, font) => ({ ...acc, ...font }), {}); // Combina i font in un unico oggetto
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Nasconde la splash screen quando i font sono caricati
    }
  }, [fontsLoaded]);

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Mostra la splash screen finché i font non sono caricati
  }

  const handleSave = async () => {
    const newAsset = {
      id: Date.now().toString(),
      logo, // Assicurati che sia nel formato corretto
      color,
      font,
      title,
    };

    try {
      const storedAssets = await AsyncStorage.getItem('assets');
      const assets = storedAssets ? JSON.parse(storedAssets) : [];
      const updatedAssets = [...assets, newAsset];
      await AsyncStorage.setItem('assets', JSON.stringify(updatedAssets));
      navigation.goBack();
    } catch (error) {
      console.error('Errore durante il salvataggio dell\'asset:', error);
    }
  };

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <View style={styles.container}>
        {/* Anteprima */}
        <ImageBackground
          source={typeof logo === 'string' ? { uri: logo } : logo}
          style={styles.previewBox}
          imageStyle={styles.previewImage} // Stile per l'immagine di sfondo
        >
          <Text style={[styles.previewText, { color: color || '#ffffff', fontFamily: font || 'System' }]}>
            {title}
          </Text>
        </ImageBackground>

        {/* Input per il titolo */}
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={setTitle}
        />

        {/* Selettori */}
        <ImageSelector logo={logo} setLogo={setLogo} />
        <ColorSelector color={color} setColor={setColor} />
        <FontSelector font={font} setFont={setFont} />

        {/* Pulsante Salva */}
        <View style={styles.saveButtonContainer}>
          <Button
            title="Save"
            onPress={handleSave}
            disabled={!logo || !color || !font || !title}
            color="tomato"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  previewBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 250,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden', // Per assicurarsi che l'immagine non esca dai bordi
  },
  previewImage: {
    resizeMode: 'cover', // Adatta l'immagine al contenitore
    borderRadius: 10,
  },
  previewText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  saveButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default AssetCreator;