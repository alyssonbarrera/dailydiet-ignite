import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getMeal (mealId: string) {
    try {        
        const storage = await AsyncStorage.getItem(mealId);
        const meal = storage ? JSON.parse(storage) : [];

        return meal;
    } catch (error) {
        throw error;
    }
};
