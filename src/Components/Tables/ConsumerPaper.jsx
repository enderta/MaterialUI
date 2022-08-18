import React from 'react'

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
const ConsumerPaper = () => {
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
  
    return (
      <>
        <div>
        <TextField id="standard-basic" label="Search" value={search} onChange={handleSearch} />
        </div>
        <div>
        <Box
          sx={{
           
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
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
                    image={item.picture.large}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name.first} {item.name.last}
                    </Typography>
                    <Typography>
                      {item.email} <br />
                      {item.phone} <br />
                      {item.location.city} {item.location.state} {item.location.postcode} <br />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>

                 )
                })
            }
            </Grid>

        </Container>

        </div>
       
      </>
    )}

export default ConsumerPaper