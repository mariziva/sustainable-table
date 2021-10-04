function MealPlan ({ myRecipes, setMyRecipes }) {

    return(
        myRecipes.map(recipe => recipe.title)
    )

}
export default MealPlan