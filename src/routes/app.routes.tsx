import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feedback } from "@screens/Feedback";

import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { AddOrEditMeal } from "@screens/AddOrEditMeal";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="addOrEditMeal"
                component={AddOrEditMeal}
            />
            <Screen
                name="meal"
                component={Meal}
            />
            <Screen
                name="feedback"
                component={Feedback}
            />
            <Screen
                name="statistics"
                component={Statistics}
            />
        </Navigator>
    )
}
