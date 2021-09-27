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

const drawerWidth = 240;

export default function ClippedDrawer({ user, setUser }) {

  function handleLogoutClick(e) {
    e.preventDefault();
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
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
            <Button>Add a food</Button>
            {/* href={NewFood} will go above*/}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* <Typography> */}
          <Foods />
        {/* </Typography> */}
        <Divider />
        {/* <Typography paragraph> */}
          <Recipes />
        {/* </Typography> */}
      </Box>
    </Box>
  );
}