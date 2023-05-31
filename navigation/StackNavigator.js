import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Invigilator Pages
import Home from "../components/Invigilators/Home";
import Scanner from "../components/Invigilators/Scanner/Scanner";
import List from "../components/Invigilators/List";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Invigilator-Home">
                <Stack.Screen
                    name="Invigilator-Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="QR-Code-Scan"
                    component={Scanner}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Invigilator-List"
                    component={List}
                    options={{ headerShown: false }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;