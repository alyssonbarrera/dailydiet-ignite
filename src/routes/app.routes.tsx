import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { NewMeal } from "@screens/NewMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="meal">
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="newMeal"
                component={NewMeal}
            />
            <Screen
                name="meal"
                component={Meal}
            />
        </Navigator>
    )
}
