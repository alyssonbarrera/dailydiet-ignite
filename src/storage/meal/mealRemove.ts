import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { getAllMeals } from "./mealGetAll";
import { MealProps } from "./mealType";

export async function removeMeal (mealId: string) {
    try {
        const storedMeals = await getAllMeals();
        const meals = storedMeals.filter((meal: MealProps) => meal.id !== mealId);

        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
    } catch (error) {
        throw error;
    }
}
