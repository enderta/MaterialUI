
import { Button,Container,AppBar,Toolbar,Box,Typography,IconButton } from '@mui/material/'
import MenuIcon from '@mui/icons-material/Menu';
import Lock from '@mui/icons-material/Lock';
import React from 'react'

const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Container maxWidth='lg'>
                <Toolbar disableGutters>
                <Box sx={{mr:1}}>
                <IconButton size='large' color='inherit' aria-label='Menu'>
                    <MenuIcon />
                </IconButton>
                </Box>
                <Typography variant='h6' color='inherit' noWrap sx={{flexGrow:1,display:{xs:"none",md:"flex"}}}>
                Welcome
                </Typography>
                <Typography variant='h6' color='inherit' noWrap sx={{flexGrow:1,display:{xs:"flex",md:"none"}}}>
                Welcome
                </Typography>
                <Button variant='contained' color='primary' startIcon={<Lock/>}>
                    Login
                </Button>
        
                </Toolbar>
            </Container>                

        </AppBar> 
    </div>
  )
}

export default NavBar