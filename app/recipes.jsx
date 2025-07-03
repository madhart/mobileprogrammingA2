import { Text, View, Image, Button, Pressable } from "react-native";
import { useState } from "react";
import { useRouter } from 'expo-router';
import Recipe from "../components/Recipe.jsx"
import recipeData from "../assets/recipes.json"
import { useContext } from 'react';
import { RecipeContext } from '../components/RecipeContext'

const L1 = require("../assets/images/lasagna.jpg");
const O1 = require("../assets/images/bakedOatmeal.jpg")
const C1 = require("../assets/images/chili.jpg")


const images = { "L1" : L1, "O1" : O1, "C1" : C1}

console.log(recipeData);
export default function Index() {
    const router = useRouter();
    const { recipeData} = useContext(RecipeContext);
  const [recipeIndex, setRecipeIndex] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <Recipe recipeData= {recipeData} recipeIndex= {recipeIndex} images={images} />
     <Button title= "Next Recipe" onPress ={ () => setRecipeIndex( (recipeIndex + 1) % recipeData.length)}/>
         <Button onPress={() => router.navigate('/')}title="Edit recipes"></Button>
    </View>
  );
}
