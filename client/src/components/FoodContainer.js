import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import NewFood from './NewFood'
import Foods from './Foods'
import Recipes from './Recipes'
import { useState } from 'react';

const drawerWidth = 240;

export default function ClippedDrawer({ user, setUser }) {

  const [foods, setfood] = useState([])
  const [addForm, setAddForm] = useState(false)
  const [foodName, setFoodName] = useState(foods.name)
  const [foodQuantity, setFoodQuantity] = useState(foods.quantity)
  const [foodUnit, setFoodUnit] = useState(foods.unit)
  const [foodCategory, setFoodCategory] = useState(foods.category)
  const [foodDaysUntilExpiration, setFoodDaysUntilExpiration] = useState(foods.days_until_expiration)
  const [foodDateOfPurchase, setFoodDateOfPurchase] = useState(foods.date_of_purchase)

  function handleFoodUpdate (){
    //function stuff 
        }
    
  function addNewFood() {
            //function stuff, form, also need button for submitting form.
        }

  function handleLogoutClick(e) {
    e.preventDefault();
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  function handleAddForm(){
    setAddForm(!addForm);
  }

  function onAddFood(newFood){
    const updatedFoodsArray = [...foods, newFood]
    setfood(updatedFoodsArray);
  }

  function handleSubmit (e){
    e.preventDefault();
    fetch ("/foods", {
      method: "POST",
      headers: {
       "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: foodName,
        quantity: foodQuantity,
        unit: foodUnit,
        category: foodCategory,
        days_until_expiration: foodDaysUntilExpiration,
        date_of_purchase: foodDateOfPurchase
      }),
  })
  .then(response => response.json())
  .then (data => onAddFood(data))
  setFoodName("")
  setFoodCategory("")
  setFoodUnit("")
  setFoodDateOfPurchase("")
  setFoodDaysUntilExpiration("")
  setFoodQuantity("")
  }


  return (

    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href=""
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{flex: 1}}>
            Sustainable Table
          </Typography>
          <Button href="/logout" color="inherit" onClick={handleLogoutClick}
          >Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <Button onClick={handleAddForm}>Add a food</Button>
            {addForm ? (<form onSubmit={handleSubmit}>
              <input type="text" placeholder="name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}></input>
            </form>):(null)}
            {/* href={NewFood} will go above*/}
            <Divider />
            <Button>Find a random recipe</Button>
            <Divider />
            <Button>Meal Planner</Button>
            <Divider />
            <Button>Grocery List</Button>
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* <Typography> */}
          <Foods foods={foods} setfood={setfood} />
        {/* </Typography> */}
        <Divider />
        {/* <Typography paragraph> */}
          <Recipes />
        {/* </Typography> */}
      </Box>
    </Box>
  );
}