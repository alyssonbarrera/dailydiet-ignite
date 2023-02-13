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

AsyncStorage.clear();

function bestMealSequence(meals: MealProps[]) {
    let maxSequence = 0;
    let currentSequence = 0;
  
    for (let i = 0; i < meals.length; i++) {
      if (meals[i].withinTheDiet === true) {
        currentSequence++;
      } else {
        maxSequence = Math.max(maxSequence, currentSequence);
        currentSequence = 0;
      }
    }
  
    return Math.max(maxSequence, currentSequence);
}

export async function getStatistic(): Promise<StatisticProps> {
    try {
        const storedMeals = await getAllMeals();
        const storedBestSequenceOfMealsWithinTheDiet = await AsyncStorage.getItem(BEST_SEQUENCE_OF_MEALS_WITHIN_THE_DIET);

        const totalMeals = storedMeals.length;
        const mealsWithinTheDiet = bestMealSequence(storedMeals.filter((meal: MealProps) => meal.withinTheDiet));

        const mealsOutsideTheDiet = totalMeals - mealsWithinTheDiet;
        
        const calculateMealsWithinTheDiet = mealsWithinTheDiet === 0 || totalMeals === 0 ? 0 : (mealsWithinTheDiet / totalMeals) * 100;

        let bestSequenceOfMealsWithinTheDiet = Math.max(mealsWithinTheDiet, Number(storedBestSequenceOfMealsWithinTheDiet));
        
        if (bestSequenceOfMealsWithinTheDiet > Number(storedBestSequenceOfMealsWithinTheDiet)) {
            await AsyncStorage.setItem(BEST_SEQUENCE_OF_MEALS_WITHIN_THE_DIET, bestSequenceOfMealsWithinTheDiet.toString());
        }

        return {
            totalMeals,
            calculateMealsWithinTheDiet,
            mealsWithinTheDiet,
            mealsOutsideTheDiet,
            bestSequenceOfMealsWithinTheDiet,
        };

    } catch (error) {
        throw error;
    }
}
