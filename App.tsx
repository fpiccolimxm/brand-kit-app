import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import AssetCreator from './src/components/AssetCreator';
import BrandKit from './src/components/BrandKit';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Assets' }}
        />
        <Stack.Screen
          name="Asset Creator"
          component={AssetCreator}
          options={{ presentation: 'modal', headerShown: false }} // Modale
        />
        <Stack.Screen name="Brand Kit" component={BrandKit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;