import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMeal } from "./mealGet";
import { MealProps } from "./mealType";

export async function editMeal(mealId: string, meal: MealProps) {
    try {
        const storedMeal = await getMeal(mealId);
        const updatedMeal = { ...storedMeal, ...meal };

        await AsyncStorage.setItem(mealId, JSON.stringify(updatedMeal));
    } catch (error) {
        throw error;
    }
}
