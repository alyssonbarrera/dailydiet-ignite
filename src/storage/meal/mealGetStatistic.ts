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

    maxSequence = Math.max(maxSequence, currentSequence);

    return maxSequence;
}

export async function getStatistic(): Promise<StatisticProps> {
    try {
        let storedMeals = await getAllMeals();

        const totalMeals = storedMeals.length;
        const mealsWithinTheDiet = storedMeals.filter((meal: MealProps) => meal.withinTheDiet === true).length;
        const mealsOutsideTheDiet = totalMeals - mealsWithinTheDiet;
        const bestSequenceOfMealsWithinTheDiet = bestMealSequence(storedMeals.sort((a: MealProps, b: MealProps) => new Date(a.dateUtc).getTime() - new Date(b.dateUtc).getTime()));
        
        const calculateMealsWithinTheDiet = mealsWithinTheDiet === 0 || totalMeals === 0 ? 0 : (mealsWithinTheDiet / totalMeals) * 100;
        
        await AsyncStorage.setItem(BEST_SEQUENCE_OF_MEALS_WITHIN_THE_DIET, bestSequenceOfMealsWithinTheDiet.toString());

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
