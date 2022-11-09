import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMeal } from "./mealGet";
import { BEST_SEQUENCE_OF_MEALS_WITHIN_THE_DIET, MEAL_COLLECTION } from "../storageConfig";
import { getAllMeals } from "./mealGetAll";
import { MealProps } from "./mealType";
import { getStatistic } from "./mealGetStatistic";

export async function editMeal(mealId: string, meal: MealProps) {
    try {
        const storedMeals = await getAllMeals();
        const storedMeal = await getMeal(mealId);
        const { bestSequenceOfMealsWithinTheDiet } = await getStatistic();

        const filterMeals = storedMeals.filter((meal: MealProps) => meal.id !== mealId);

        const updatedMeal = { ...storedMeal, ...meal };

        const storage = JSON.stringify([...filterMeals, updatedMeal]);

        await AsyncStorage.setItem(MEAL_COLLECTION, storage);

        if(meal.withinTheDiet !== storedMeal.withinTheDiet) {
            if(meal.withinTheDiet === true) {
                await AsyncStorage.setItem(BEST_SEQUENCE_OF_MEALS_WITHIN_THE_DIET, String(bestSequenceOfMealsWithinTheDiet + 1));
            } else {
                await AsyncStorage.setItem(BEST_SEQUENCE_OF_MEALS_WITHIN_THE_DIET, String(bestSequenceOfMealsWithinTheDiet - 1));
            }
        }

    } catch (error) {
        throw error;
    }
}
