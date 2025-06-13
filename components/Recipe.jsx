import { Text, View, Image } from "react-native";

export default function Recipe( {recipeData, recipeIndex, images} ) {

    return (
        <>
        <Text>Recipe Name: {recipeData[recipeIndex].mealName}</Text>
        {
            recipeData[recipeIndex].ingredients.map( (ingredient) => <Text key={ingredient}>{ingredient} </Text> )
        }
        {
            recipeData[recipeIndex].RecipeSteps.map( (RecipeStep) => <Text key={RecipeStep}>{RecipeStep} </Text> )
        }
        <Image
            source={images[recipeData[recipeIndex].mealPhoto]}
            style = {{ width: 200, height: 200}}
        />
        </>
    )
}