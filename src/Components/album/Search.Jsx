import { Container,Typography,Grid,TextField,Button } from '@mui/system';
import React from 'react'

const Search = () => {
    const [search, setSearch] = React.useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    const getSearch = async (event) => {
        event.preventDefault();
    
        const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=9f4b46a`)
        const data = await response.json();
        console.log(data);
        setSearch('');
    }

    React.useEffect(() => {
        getSearch();
    } , [])


  return (
    <div>
      <Container maxWidth="sm">
      <Typography variant='subtitle1' align='center' color='textSecondary' paragraph>
               Search for and add movies you like to watch later.
                </Typography>
                <Grid spacing={4}  justify='center' container>
                    <Grid item>
                    <TextField  id="standard-basic" label="Search" value={search} onChange={handleChange} />
  <Button variant="contained" color="primary" onClick={getSearch}>
    Search
  </Button>
                    </Grid >
                </Grid>
                </Container>
    </div>
  )
}

export default Search
