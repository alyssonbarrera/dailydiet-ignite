import AsyncStorage from "@react-native-async-storage/async-storage";
import { BEST_SEQUENCE_OF_MEALS_WITHIN_THE_DIET } from "@storage/storageConfig";
import { getAllMeals } from "./mealGetAll";
import { MealProps } from "./mealType";

type StatisticProps = {
    totalMeals: number;
    calculateMealsWithinTheDiet: number;
    mealsWithinTheDiet: number;
    mealsOutsideTheDiet: number;
    bestSequenceOfMealsWithinTheDiet: number;
};

export async function getStatistic(): Promise<StatisticProps> {
    try {
        const storedMeals = await getAllMeals();
        const storedBestSequenceOfMealsWithinTheDiet = await AsyncStorage.getItem(BEST_SEQUENCE_OF_MEALS_WITHIN_THE_DIET);

        const totalMeals = storedMeals.length;
        const mealsWithinTheDiet = storedMeals.filter((meal: MealProps) => meal.withinTheDiet === true).length;
        const mealsOutsideTheDiet = totalMeals - mealsWithinTheDiet;
        
        const calculateMealsWithinTheDiet = (mealsWithinTheDiet / totalMeals) * 100 || 0;

        const countMealsByDate = storedMeals.filter((meal: MealProps) => meal.withinTheDiet === true).reduce((acc, meal) => {
            acc[meal.date] = (acc[meal.date] || 0) + 1;
            return acc;
        }, {})

        const countMaxMealsByDate = Math.max(...Object.values(countMealsByDate) as number[]);

        await AsyncStorage.setItem(BEST_SEQUENCE_OF_MEALS_WITHIN_THE_DIET, countMaxMealsByDate.toString());

        return {
            totalMeals,
            calculateMealsWithinTheDiet,
            mealsWithinTheDiet,
            mealsOutsideTheDiet,
            bestSequenceOfMealsWithinTheDiet: Number(storedBestSequenceOfMealsWithinTheDiet),
        };

    } catch (error) {
        throw error;
    }
}
