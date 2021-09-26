import { useState, useEffect } from "react";

function Recipes () {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
    fetch("/randomrecipe")
    .then((response) => response.json())
    .then((recipes) => setRecipes(recipes));
    }, []);

    console.log(recipes.recipes[0].healthScore)

return (

    recipes.recipes[0].healthScore
)}


export default Recipes;