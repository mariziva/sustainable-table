import { useEffect } from 'react'

function MealPlan ({myRecipes, setMyRecipes}) {

 useEffect(() => {
fetch("/recipes")
.then((response) => response.json())
.then(myRecipes => setMyRecipes(myRecipes))}, [])

// const deleteItem= (myRecipes) => {
//     const deleteItem = myRecipes.filter(recipe => recipe.id !== myRecipes.id)
//     setMyRecipes(deleteItem)
// }

// function handleDeleteClick(myRecipes){
//     fetch(`recipes/${myRecipes.id}`, {
//         method: "DELETE",
//       });
//       deleteItem(myRecipes.id);
// }

    return(
        myRecipes.map(recipe => 
        <>
        <p>{recipe.name}</p>
        {/* <button onClick={handleDeleteClick}>Delete</button> */}
        </>
        ))
}
export default MealPlan