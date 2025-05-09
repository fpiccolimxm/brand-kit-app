import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ImageSelector = ({ logo, setLogo }: { logo: string | null; setLogo: (logo: string) => void }) => {
  const images = [
    require('../../assets/icons/photo-1.jpeg'),
    require('../../assets/icons/photo-2.jpeg'),
    require('../../assets/icons/photo-3.jpeg'),
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Image</Text>
      <FlatList
        data={images}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setLogo(item)}>
            <Image source={item} style={[styles.image, logo === item && styles.selectedImage]} />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.carousel}
      />
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
  carousel: {
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedImage: {
    borderColor: 'tomato',
  },
});

export default ImageSelector;