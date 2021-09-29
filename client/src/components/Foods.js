import { useEffect, useState } from "react";
import FoodCard from "./FoodCard"
import Grid from "@mui/material/Grid"

function Foods({ foods, setfood }){ 

    

      const sortedFoods = foods.sort((a, b) => ((a.days_until_expiration) - (b.days_until_expiration)))

      return(
          <Grid container spacing={6}>
{sortedFoods.map(food => <FoodCard food={food} foods={foods} setfood={setfood}
 />)}</Grid>)
};

export default Foods;