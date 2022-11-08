import { MealProps } from "src/storage/meal/mealType";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            newMeal: undefined;
            meal: {
                meal: MealProps;
            };
            feedback: {
                isPositive: boolean;
            }
            statistics: undefined;
        }
    }
}