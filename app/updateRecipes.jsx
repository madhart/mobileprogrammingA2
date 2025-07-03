import { Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import { RecipeContext } from '../components/RecipeContext'
import { Picker } from '@react-native-picker/picker';

export default function updateRecipes() {
    const [currentRecipe, setCurrentRecipe] = useState(0);
    const { recipeData, setRecipeData } = useContext(RecipeContext);

    const [mealName, setMealName] = useState(recipeData[currentRecipe].mealName)
    const [ingredients, setIngredients] = useState(recipeData[currentRecipe].ingredients)
    const [RecipeSteps, setRecipeSteps] = useState(recipeData[currentRecipe].RecipeSteps)
    const [poster, setPoster] = useState(recipeData[currentRecipe].image)

    const changeIngredients = (value) => {
        const updatedIngredients = value.split(',');
        setIngredients(updatedIngredients)
        }

    const changeSteps = (value) => {
        const updatedSteps = value.split(',');
        setRecipeSteps(updatedSteps)
        }

    const updateRecipeData = () => {

            const updatedData = {
                mealName : mealName,
                ingredients : ingredients,
                RecipeSteps : RecipeSteps,
                image: "L1"
                }
            console.log(updatedData);
            recipeData[currentRecipe] = updatedData
            setRecipeData(recipeData)

            }

    const changeRecipeIndex = (value) => {
        const index = parseInt(value)
        setMealName(recipeData[index].mealName);
        setIngredients(recipeData[index].ingredients);
        setRecipeSteps(recipeData[index].RecipeSteps);
        setCurrentRecipe(index)
        }

    return (
        <>
            <Text>Recipe Index</Text>
            <Picker
                selectedValue={currentRecipe}
                onValueChange={(itemValue, itemIndex) =>
                    changeRecipeIndex(itemIndex)
                    }>
                    <Picker.Item label="Recipe 1" value="r1" />
                    <Picker.Item label="Recipe 2" value="r2" />
                    <Picker.Item label="Recipe 3" value="r3" />
                  </Picker>
            <Text>Meal Name</Text>
            <TextInput value={mealName} onChangeText = {setMealName}/>

            <Text>Ingredients</Text>
            <TextInput value={ingredients.toString()} onChangeText = {changeIngredients}/>

            <Text>Recipe Steps</Text>
            <TextInput value={RecipeSteps.toString()} onChangeText = {changeSteps}/>

             <Text>Photo</Text>
             <Picker
                 selectedValue={poster}
                 onValueChange={(itemValue, itemIndex) =>
                     setPoster(itemValue)
                     }>
                        <Picker.Item label="Lasagna photo" value="L1" />
                        <Picker.Item label="Oatmeal photo" value="O1" />
                        <Picker.Item label="Chili photo" value="C1" />
                        </Picker>

            <Button title="Update" onPress={updateRecipeData}/>
        </>
        )
}