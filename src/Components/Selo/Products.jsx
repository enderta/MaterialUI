import React from 'react'
import prods from "./prods.js"
import "../../App.css"

import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';


const Products = () => {
    const [search, setSearch] = React.useState('')
    const [filter, setFilter] = React.useState(prods)

    const handleSearch = (e) => {
        setSearch(e.target.value)
        const filtered = prods.filter(prod => prod.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilter(filtered)
    }
console.log(filter)


const styles = {
  container: {
      backgroundImage: `http://www.baharatcifatihsude.com.tr/resimler/banner/1519820465.jpg`
  }
};

  return (
    <div >
    <div className="container">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
 
    </div>
    <div>
      <TextField id="search" label="Ara" onChange={handleSearch} style={{marginTop: "10px"}} />
    </div>
    <div >
      
        <Box
          sx={{
           
            pt: 8,
            pb: 6,
          }}
         >
         <div >
         <Container maxWidth="sm"  >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              
            >
              Aksoy Baharat
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary">
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Typography variant="h4" align="center" color="text.secondary" paragraph>
             Siparis Hatti:#######
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             
            </Stack>
          </Container>
         </div>
          
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
            {
                filter.map((item) => {
                 return (
                  <Grid item key={item} xs={12} sm={6} md={4}>
                    <Card
                  sx={{ height: '100%',weight:'100% ',display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      
                    }}
                    image={item.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name} 
                    </Typography>
                    <Typography>
                     fiyat: {item.price} <br />
                    birim: {item.unit} <br />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                  </CardActions>
                </Card>
              </Grid>

                 )
                })
            }
            </Grid>

        </Container>

        </div>
    </div>
       
  )
}

export default Products