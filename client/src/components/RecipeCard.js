import Grid from '@mui/material/Grid';
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function RecipeCard({recipe, myRecipes, setMyRecipes}) {

    const [recipeCard, setRecipeCard] = useState([])

    function handlePostToMyRecipes(e){
        e.preventDefault();
        fetch ("/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name : recipe.title,
            }),
        })
        .then(response => response.json())
        .then(data => onAddRecipe(data))
        // .then(window.location.reload())
    }

    function onAddRecipe(newRecipe){
        const updatedRecipesArray = [...myRecipes, newRecipe]
        setMyRecipes(updatedRecipesArray)
    }

    const [open, setOpen] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const handleOpen = () => setOpen(true);
        const handleClose = (e) => {e.stopPropagation(); setOpen(false);}

      function createStyledFoodCard(recipe){
        fetch(`https://api.spoonacular.com/recipes/${recipe.id}/card`)
        .then(response => response.json())
        .then(card => setRecipeCard(card))
      }

    return (
        <Grid item sm onClick={handleOpen}>
            <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description">
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
                          {recipe.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          text
                        </Typography>
        </Box>
        </Modal>
        {createStyledFoodCard(recipe)}
        <p>{recipe.title}</p>
        <Button onClick={handlePostToMyRecipes}>Click to add to your Meal Planner</Button>
        </Grid>
    )
}
export default RecipeCard;