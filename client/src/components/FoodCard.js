import Grid from '@mui/material/Grid';


// render to different shelves and different shaped cards based on category as a stretch, view food card brings to front of page

function FoodCard({ setfood, food }) {

        function onUpdateFood(updatedFood){
                const updatedFoodsArray = food.map((food) => {
                        if (food.id===updatedFood.id) {
                                return updatedFood;}
                                else {
                                        return food
                                }
                        })
                setfood(updatedFoodsArray)
        }

return (
        <Grid item sm>
        <p>{food.name} ({food.quantity} {food.unit})</p>
        <p>{food.days_until_expiration} days to use</p>
        <button>Edit</button>
        <button>Delete</button>
        </Grid>
)
}
export default FoodCard;