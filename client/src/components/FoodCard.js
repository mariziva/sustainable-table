import Grid from '@mui/material/Grid';


// render to different shelves and different shaped cards based on category as a stretch, view food card brings to front of page

function FoodCard({food}) {

return (
        <Grid item sm>
        <p>{food.name} ({food.quantity} {food.unit})</p>
        <p>{food.days_until_expiration}days to use</p>
        </Grid>
)
}
export default FoodCard;