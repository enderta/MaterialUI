import React from 'react'
import Carousel from 'better-react-carousel'

import {TextField,Button} from '@mui/material';

const FlatCarosel = () => {
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

console.log(movie)
 


    
    
      
  return (
    <div>
    <div>
    <TextField id="standard-basic" label="Search" value={search} onChange={handleChange} />
  <Button variant="contained" color="primary" onClick={getSearch}>
    Search
  </Button>
    </div>

    <Carousel cols={3} rows={1} gap={1} loop >
        {movie.map((item, index) => {
            return (
                <Carousel.Item>
                    <img width="100%" height="800px"   src={item.Poster} alt={item.Title} />
                </Carousel.Item>
            )})}
              {/* ... */}
    </Carousel>
    </div>
  )
}

export default FlatCarosel