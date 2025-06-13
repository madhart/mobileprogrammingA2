function displayCurrentItem(props) {

    return (
        <>
            <h3>{props.mealName}</h3>
            <p>{props.ingredients}</p>
            <p>{props.mealPhoto}</p>
            <p>{props.recipeSteps}</p>
        </>
    )
}

export default displayCurrentItem