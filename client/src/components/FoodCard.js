import Grid from '@mui/material/Grid';


function FoodCard({food}) {
return (
        <Grid item sm>
        <p>{food.name} ({food.quantity} {food.unit})</p>
        <p>{food.days_until_expiration}days to use</p>
        </Grid>
)
}
export default FoodCard