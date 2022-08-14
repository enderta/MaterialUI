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
    <div style={{backgroundColor:'rgb(2,0,36)',background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(42,50,8,1) 21%, rgba(0,212,255,1) 100%)"}}>
    
        <CssBaseline />
        <AppBar position='relative'>
        <Toolbar>
            <MovieIcon/>
            <Typography variant='h6'>
                Movies
            </Typography>
        </Toolbar>

        </AppBar>
        <main >
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
                <Container maxWithd='md' >
                    <Grid spacing={4}   container>
                       {
                            movie.map((item) => {
                                return(
                                    <Grid item xs={12} sm container>
                                    <Card sm >
                                                    <CardMedia component="img"   height="194" alt="Contemplative Reptile"  image={item.Poster} title="Contemplative Reptile" />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {item.Title}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {item.Year}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button size="small" color="primary">
                                                            Share
                                                        </Button>
                                                        <Button size="small" color="primary">
                                                            Learn More
                                                        </Button>
                                                    </CardActions>
                                                </Card>
                                    </Grid>
                                )
                            } )
                          }
                    
                       
                    </Grid>
                </Container>
            </div>
        </main>
    </div>
  )
}

export default Album