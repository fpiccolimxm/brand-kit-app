import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Asset } from '../types';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [assets, setAssets] = useState<Asset[]>([]);

  const loadAssets = async () => {
    const storedAssets = await AsyncStorage.getItem('assets');
    if (storedAssets) {
      setAssets(JSON.parse(storedAssets));
    }
  };

  const deleteAsset = async (id: string) => {
    const updatedAssets = assets.filter((asset) => asset.id !== id);
    setAssets(updatedAssets);
    await AsyncStorage.setItem('assets', JSON.stringify(updatedAssets));
  };

  useEffect(() => {
    loadAssets();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadAssets();
    });

    return unsubscribe;
  }, [navigation]);

  const renderAsset = ({ item }: { item: Asset }) => {
    const formattedDate = new Date(parseInt(item.id)).toLocaleString('it-IT', { 
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
  });  

    return (
      <View style={styles.assetItem}>
        <Image
          source={typeof item.logo === 'string' ? { uri: item.logo } : item.logo}
          style={styles.logo}
        />
        <View style={[styles.colorBox, { backgroundColor: item.color }]} />
        <View style={styles.assetDetails}>
        <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.fontText}>{item.font}</Text>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </View>
        <TouchableOpacity onPress={() => deleteAsset(item.id)}>
          <Ionicons name="trash-outline" size={24} color="tomato" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={assets}
        keyExtractor={(item) => item.id}
        renderItem={renderAsset}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No set saved yet</Text>
          </View>
        }
        contentContainerStyle={assets.length === 0 ? styles.emptyFlatList : undefined}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Asset Creator')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  assetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  colorBox: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  assetDetails: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
  },
  fontText: {
    fontSize: 14,
  },
  dateText: {
    fontSize: 14,
    color: 'gray',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
  emptyFlatList: {
    flex: 1,
    justifyContent: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'tomato',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default HomeScreen;