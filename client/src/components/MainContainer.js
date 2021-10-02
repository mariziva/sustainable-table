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
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

const drawerWidth = 240;

export default function ClippedDrawer({ user, setUser }) {

  const [foods, setfood] = useState([])
  const [addForm, setAddForm] = useState(false)


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

  return (
    <Router>
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
            {addForm ? <NewFood foods={foods} setfood={setfood}/>:null}
            <Divider />
            <Button href="/foods">My Fridge</Button>
            <Divider />
            <Button href="/recipes">My Recipes</Button>
            <Divider />
            <Button>Meal Planner</Button>
            <Divider />
            <Button>Grocery List</Button>
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Switch>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        
        <Route exact path="/foods">
        <Typography>
          <Foods foods={foods} setfood={setfood}/>
        </Typography>
        </Route>
        <Route exact path="/recipes">
        <Typography paragraph>
          <Recipes />
        </Typography>
        </Route>
        
      </Box>
      </Switch>
    </Box>
    </Router>
  );
}