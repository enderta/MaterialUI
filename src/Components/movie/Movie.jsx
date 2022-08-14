import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { TextField,Button,Stack,CardContent  } from '@mui/material';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Movie = () => {
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


 

console.log(movie);



  return (
    <div>
  <TextField id="standard-basic" label="Search" value={search} onChange={handleChange} />
  <Button variant="contained" color="primary" onClick={getSearch}>
    Search
  </Button>
  <Stack spacing={2}>
  
  {
    movie.map((item) => {
     return(
    
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 150, height: 150 }}>
            <Img alt="complex" src={item.Poster} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               {item.Title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {item.Year}
              </Typography>
              
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                imdb: {item.imdbID}
              </Typography>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
   

     
      
     )
    } )


  }
  
  </Stack>
  
    </div>
  )
}

export default Movie
