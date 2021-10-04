function MealPlan ({ myRecipes, setMyRecipes }) {

    return(
        myRecipes.map(recipe => recipe.name)
    )

}
export default MealPlan