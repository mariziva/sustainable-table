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
import { useState, useEffect } from 'react';

const drawerWidth = 240;

export default function ClippedDrawer({ user, setUser }) {

  const [foods, setfood] = useState([])
  const [addForm, setAddForm] = useState(false)
  const [foodName, setFoodName] = useState("")
  const [foodQuantity, setFoodQuantity] = useState("")
  const [foodUnit, setFoodUnit] = useState("")
  const [foodCategory, setFoodCategory] = useState("")
  const [foodDaysUntilExpiration, setFoodDaysUntilExpiration] = useState("")
  const [foodDateOfPurchase, setFoodDateOfPurchase] = useState("")

  useEffect(() => {
    fetch("/foods")
      .then((r) => r.json())
      .then(setfood);
  }, []);

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
  .then(window.location.reload())
  setFoodName("")
  setFoodCategory("")
  setFoodUnit("")
  setFoodDateOfPurchase(new Date())
  setFoodDaysUntilExpiration(0)
  setFoodQuantity(1)
 
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
              <input type="text"
              placeholder="name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}>
              </input>

              <input type="text"
              placeholder="unit"
              value={foodUnit}
              onChange={(e) => setFoodUnit(e.target.value)}>
              </input>
{/* would be great if this was a drop down: */}
              <input type="text"
              placeholder="category"
              value={foodCategory}
              onChange={(e) => setFoodCategory(e.target.value)}>
              </input>

              <input type="integer"
              placeholder="days until expiration"
              value={foodDaysUntilExpiration}
              onChange={(e) => setFoodDaysUntilExpiration(e.target.value)}>
              </input>

              <input type="integer"
              placeholder="quantity"
              value={foodQuantity}
              onChange={(e) => setFoodQuantity(e.target.value)}>
              </input>

              <br />
              Date of Purchase:
              <input type="datetime-local"
              placeholder="date purchased"
              value={foodDateOfPurchase}
              onChange={(e) => {
                setFoodDateOfPurchase(e.target.value)
              }}>
                </input>

              <br />
              <button type="submit">Submit</button>
            </form>):(null)}
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
          <Foods foods={foods} setfood={setfood}/>
        {/* </Typography> */}
        <Divider />
        {/* <Typography paragraph> */}
          <Recipes 
          // ingredientList={ingredientList}
          />
        {/* </Typography> */}
      </Box>
    </Box>
  );
}