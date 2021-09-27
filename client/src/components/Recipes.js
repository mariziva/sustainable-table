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
    // console.log(recipes.recipes[0].title)

return (
    <div> {displayRecipes ? <h1>{recipes.recipes[0].title} </h1>: <h1>Loading...</h1>}</div>
)}


export default Recipes;