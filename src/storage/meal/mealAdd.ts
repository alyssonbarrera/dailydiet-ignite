import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../storageConfig";
import { getAllMeals } from "./mealGetAll";
import { MealProps } from "./mealType";

export async function addMeal (meal: MealProps) {
    try {
        const storedMeals = await getAllMeals();

        const storage = JSON.stringify([...storedMeals, meal]);
        return await AsyncStorage.setItem(MEAL_COLLECTION, storage);
        
    } catch (error) {
        throw error;
    }
}
