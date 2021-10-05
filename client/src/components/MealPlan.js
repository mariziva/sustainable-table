import { useEffect } from 'react'

function MealPlan ({myRecipes, setMyRecipes}) {

 useEffect(() => {
fetch("/recipes")
.then((response) => response.json())
.then(myRecipes => setMyRecipes(myRecipes))}, [])

    return(
        myRecipes.map(recipe => <p>{recipe.name}</p>)
    )

}
export default MealPlan