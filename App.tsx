import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import LogoEditor from './src/components/LogoEditor';
import ColorPaletteManager from './src/components/ColorPaletteManager';
import FontPicker from './src/components/FontPicker';
import BrandKit from './src/components/BrandKit';

const Stack = createStackNavigator();

const App = () => {
  const handleFontSelect = (font: string) => {
    console.log('Selected font:', font);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LogoEditor" component={LogoEditor} />
        <Stack.Screen name="ColorPaletteManager" component={ColorPaletteManager} />
        <Stack.Screen
          name="FontPicker"
          children={(props) => <FontPicker {...props} onSelectFont={handleFontSelect} />}
        />
        <Stack.Screen name="BrandKit" component={BrandKit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;