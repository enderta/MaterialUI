import React from 'react'
import { useState,useEffect } from 'react';
import {TextField,Button, Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Container,Toolbar, Table,TableBody,TableHead,TableRow,TableCell } from '@mui/material/'

const Country = () => {
    const [country, setCountry] = useState('');
    const [countryInfo, setCountryInfo] = useState([]);

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("X-Api-Key", "3sVCbYLK1DqtVPikLz9ldg==TnZcdT2kmjuax6jV");
    
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        fetch(`https://api.api-ninjas.com/v1/country?name=${country}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            setCountryInfo(result)
          }
          , [])
      }, [country])
      const handleChange = (event) => {
        setCountry(event.target.value);
        }

      const handleSubmit = (event) => {
        event.preventDefault();
        setCountry('');
        }

  return (
    <div>
    <AppBar position='relative' style={{backgroundColor:'rgb(131,58,180)',background:"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(230,79,79,1) 26%, rgba(252,176,69,1) 100%)"}} >
        <Toolbar>
          
            <Typography variant='h6'>
                Cities
            </Typography>
        </Toolbar>

        </AppBar>
        <main >
            <Container maxWithd='sm' >
                <Typography variant='h4' align='center' gutterBottom color='textPrimary'>
                    Cities You May Like
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary' paragraph>
                Search for and add cities you like to visit.
                </Typography>
                <Grid spacing={4}  justify='center' container>
                    <Grid item>
                    <TextField  id="standard-basic" label="Search" value={country} onChange={handleChange} />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Search
                    </Button>
                    </Grid >
                </Grid>
                <br/>
            </Container >
            <div>
                {countryInfo.map((country) => (
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Country</TableCell>
                                <TableCell>Capital</TableCell>
                                <TableCell>Currency</TableCell>
                                <TableCell>Languages</TableCell>
                                <TableCell>Population</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{country.name}</TableCell>
                                <TableCell>{country.capital}</TableCell>
                                <TableCell>{country.currency.code}</TableCell>
                                <TableCell>{country.languages}</TableCell>
                                <TableCell>{(country.population).toLocaleString('en-US',{maximumFractionDigits:2})+" mil"}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                ))}
            </div>  
        </main>
      
    </div>
  )
}

export default Country
