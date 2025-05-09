import {useEffect, useState} from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { BrandAsset } from '../types';
import useAsyncStorage from '../hooks/useAsyncStorage';

const BrandKit: React.FC = () => {
    const { storedValue, removeValue } = useAsyncStorage('brandAssets');
    const [brandAssets, setBrandAssets] = useState<BrandAsset[]>([]);

    useEffect(() => {
        const fetchAssets = async () => {
            if (storedValue) {
                setBrandAssets(storedValue);
            }
        };
        fetchAssets();
    }, [storedValue]);

    const handleDelete = async (id: string) => {
        const updatedAssets = brandAssets.filter(asset => asset.id !== id);
        setBrandAssets(updatedAssets);

        // Aggiorna AsyncStorage con i dati aggiornati
        await removeValue(updatedAssets);
    };

    const renderItem = ({ item }: { item: BrandAsset }) => (
        <View style={styles.assetContainer}>
            <Text style={styles.assetText}>{item.name}</Text>
            <Button title="Delete" onPress={() => handleDelete(item.id)} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Brand Kit</Text>
            <FlatList
                data={brandAssets}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    assetContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    assetText: {
        fontSize: 18,
    },
});

export default BrandKit;