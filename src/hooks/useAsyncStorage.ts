import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { BrandAsset } from "../types";

const useAsyncStorage = (key: string) => {
    const [storedValue, setStoredValue] = useState<any>(null);

    const getValue = async () => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                setStoredValue(JSON.parse(value));
            }
        } catch (error) {
            console.error('Error retrieving data from AsyncStorage', error);
        }
    };

    const setValue = async (value: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
            setStoredValue(value);
        } catch (error) {
            console.error('Error saving data to AsyncStorage', error);
        }
    };

    const removeValue = async (updatedAssets: BrandAsset[]) => {
        try {
            const jsonValue = JSON.stringify(updatedAssets);
            await AsyncStorage.setItem(key, jsonValue);
            setStoredValue(updatedAssets);
        } catch (error) {
            console.error('Error updating data in AsyncStorage', error);
        }
    };

    useEffect(() => {
        getValue();
    }, []);

    return { storedValue, setValue, removeValue };
};

export default useAsyncStorage;