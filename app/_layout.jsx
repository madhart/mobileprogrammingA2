import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons' ;
import { RecipeContext } from "../components/RecipeContext";
import { useState } from 'react';
import recipeObject from "../assets/recipes.json";

export default function RootLayout() {
    const [recipeData, setRecipeData] = useState(recipeObject);
  return(
      <RecipeContext.Provider value = {{recipeData, setRecipeData }}>
      <Tabs>
      <Tabs.Screen name="index"
          options={{
          title: "Recipe Home",
          tabBarIcon: ({color}) => <MaterialIcons  size = {28} name="home" color={color} />,
          }}
      />
         <Tabs.Screen name="recipes"
                options={{
                title: "Display recipes",
                tabBarIcon: ({color}) => <MaterialIcons  size = {28} name="restaurant" color={color} />,
                }}
            />
        <Tabs.Screen name="updateRecipes"
               options={{
                   title: "Update Recipes",
                   tabBarIcon: ({color}) => <MaterialIcons  size = {28} name="edit" color={color} />,
              }}
                  />
      </Tabs>
      </RecipeContext.Provider>
      )
}
