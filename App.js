import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from '@react-navigation/stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailScree  from "./screens/MealsOverviewScreen";

const Stack = createStackNavigator();

export default function App() {


  return(
    <>
    <StatusBar style='dark' />
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions= {{
        headersStyle: { backgroundColor: '#987070'},
        headersTintColor: 'white',
        contentStyle: {backgroundColor: '#F1E5D1'}
      }}
      >
        <Stack.Screen 
        name= "MealsCategories"
        component= {CategoriesScreen}
        />
        <Stack.Screen
        name="MealsOveriview"
        component= {MealsOverviewScreen}
        options= {{
          title: 'All categories',
          headersTintColor: 'white',
          contentStyle: {backgroundColor: '#C39898'}
        }}
        />
        <Stack.Screen
        name= "MealDetails"
        component= {MealsDetailScree}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create ({
  container: {
  },
});