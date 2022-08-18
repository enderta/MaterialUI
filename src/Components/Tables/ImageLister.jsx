import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { TextField,ImageListItem,ImageList,Stack,CardContent  } from '@mui/material';
const ImageLister = () => {
    const [consumers, setConsumers] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [search, setSearch] = React.useState('')
    const[filter, setFilter] = React.useState([])

    const getConsumers = async () => {
       
        let options={
            method:"GET",
            
            redirect:"follow"
        }
        let response=await fetch("https://randomuser.me/api/?results=10",options)
        let data=await response.json()
        setConsumers(data.results)
        setLoading(false)
        setFilter(data.results)
    }       
    

    React.useEffect(() => {
        getConsumers()
    }, [])

    console.log(consumers)

const handleSearch = (e) => {
    setSearch(e.target.value)
    const filtered = consumers.filter(consumer => consumer['name'].first.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilter(filtered)
};
function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  
  return (
    <div>
        <div>
        <div>
        <TextField id="standard-basic" label="Search" value={search} onChange={handleSearch} />
        </div>
        <div>
        <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
        {
            filter.map((item)=>{
                return(
                    <ImageListItem key={item.picture.large}>
      <img
        src={`${item.picture.large}?w=161&fit=crop&auto=format`}
        srcSet={`${item.picture.large}?w=161&fit=crop&auto=format&dpr=2 2x`}
        alt={item.name.first}
        loading="lazy"
      />
    </ImageListItem>
                )
            })
        }
    </ImageList>
        </div>
        </div>
    </div>
  )
}

export default ImageLister