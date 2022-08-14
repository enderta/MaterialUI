import React from 'react'
import {TextField,Button, Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Container,Toolbar } from '@mui/material/'
import MovieIcon from '@mui/icons-material/Movie';
import { makeStyles } from '@mui/styles'



const Album = () => {
    const [search, setSearch] = React.useState('');
  const [movie, setMovie] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event) => {
    setSearch(event.target.value);
  }
  const getSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=9f4b46a`)
    const data = await response.json();
    setMovie(data.Search);
    setLoading(false);
    setSearch('');
  }
React.useEffect(() => {
  getSearch();
} , [])

    
  return (
    <div style={{margin:"0",backgroundColor:'rgb(131,58,180)',background:"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(230,79,79,1) 26%, rgba(252,176,69,1) 100%)"}}>
    
        <CssBaseline />
        <AppBar position='relative' style={{backgroundColor:'rgb(131,58,180)',background:"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(230,79,79,1) 26%, rgba(252,176,69,1) 100%)"}} >
        <Toolbar>
            <MovieIcon/>
            <Typography variant='h6'>
                Movies
            </Typography>
        </Toolbar>

        </AppBar>
        <main  style={{backgroundColor:'rgb(131,58,180)',background:"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(230,79,79,1) 26%, rgba(252,176,69,1) 100%)"}} >
            <Container maxWithd='sm' >
                <Typography variant='h4' align='center' gutterBottom color='textPrimary'>
                    Movies You May Like
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary' paragraph>
               Search for and add movies you like to watch later.
                </Typography>
                <Grid spacing={2}  justify='center' container>
                    <Grid item>
                    <TextField  id="standard-basic" label="Search" value={search} onChange={handleChange} />
  <Button variant="contained" color="primary" onClick={getSearch}>
    Search
  </Button>
                    </Grid >
                </Grid>
                <br/>
            </Container >
            <div>
            <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {movie.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card style={{backgroundColor:"orange"}}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                     
                    }}
                    image={card.Poster}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
            </div>
        </main>
    </div>
  )
}

export default Album