import { useState, useEffect } from "react";

function Recipes () {

    const [recipes, setRecipes] = useState([]);
    const [displayRecipes, setDisplayRecipes] = useState(false)

    useEffect(() => {
        fetch("/randomrecipe")
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
        Here's a random recipe: {recipes.recipes[0].title} </p>: <p>Loading...</p>}
        </div>
)}


export default Recipes;