import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  // Placeholder for last saved assets
  const lastSavedLogo = 'Last saved logo placeholder';
  const lastSavedPalette = 'Last saved palette placeholder';
  const lastSavedFont = 'Last saved font placeholder';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BrandKit App</Text>
      <View style={styles.assetContainer}>
        <Text style={styles.assetTitle}>Last Saved Logo:</Text>
        <Text style={styles.asset}>{lastSavedLogo}</Text>
      </View>
      <View style={styles.assetContainer}>
        <Text style={styles.assetTitle}>Last Saved Palette:</Text>
        <Text style={styles.asset}>{lastSavedPalette}</Text>
      </View>
      <View style={styles.assetContainer}>
        <Text style={styles.assetTitle}>Last Saved Font:</Text>
        <Text style={styles.asset}>{lastSavedFont}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  assetContainer: {
    marginVertical: 10,
  },
  assetTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  asset: {
    fontSize: 16,
    color: 'gray',
  },
});

export default HomeScreen;