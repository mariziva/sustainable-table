import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Grid from "@mui/material/Grid"

function Recipes () {

    const [recipes, setRecipes] = useState([]);
    const [displayRecipes, setDisplayRecipes] = useState(false)
    

    // useEffect(() => {
    //     fetch("/randomrecipe")
    //     .then((response) => response.json())
    //     .then(recipes => 
    //    { setRecipes(recipes)
    //     setDisplayRecipes(true);})
    //     }, []);

    // ^^randomrecipe button

    //could take the interpolation further to only do one fetch, but if i still need to do different controller actions then maybe it doesn't matter?

    //one fetch could populate the meal planner, then filter results. display smaller card and click to open recipe link. heart/like to save to "my recipes" or whatever

    //conditional for which fetch to use? 

        useEffect(() => {
            fetch("/recipesbyingredient")
            .then((response) => response.json())
            .then(recipes => 
           { setRecipes(recipes)
            setDisplayRecipes(true);})
            }, []);

return (
    <div>
        {displayRecipes ? 
        <p>Here's what you should make:
            <br />
        <Grid container spacing={6}>
        
            {recipes.map(recipe => <RecipeCard recipe={recipe}/>)}
            {/* <br />
        Here's a random recipe: {recipes.recipes[0].title} */}
         
         </Grid></p>: <p>Loading...</p>}
        </div>
)}


export default Recipes;