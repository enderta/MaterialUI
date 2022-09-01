import React from 'react'
import {useState,useEffect} from 'react'
import {Typography,Paper,TextField,Button,TableContainer,TableCell,TableRow,Table,TableBody,TableHead,} from '@mui/material'

import SendIcon from '@mui/icons-material/Send';

const CreateUser = (props) => {
    const [first_name,setFirstName] = useState(' ');
    const [last_name,setLastName] = useState(' ');
    const[maths,setMaths] = useState(' ');
    const[english,setEnglish] = useState(' ');
    const[science,setScience] = useState(' ');
    const [id,setId] = useState(' ');
   
    const createUser = (e) => {
    let course=props.c
        e.preventDefault();
        const newUser = {
            id:id,
            first_name:first_name,
            last_name:last_name,
            maths:maths,
            english:english,
            science:science
        }
        fetch('http://localhost:4000/courses',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
            props.s([...course,data])
           
        }).catch(err=>console.log(err))
    }

  return (
    <div>
        
        <Typography variant="h5" component="h3">
          Add User
        </Typography>
       

        <form onSubmit={createUser}>
               <Table sx={{ minWidth: 650 }} >
        {/* <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Maths</TableCell>
            <TableCell align="center">English</TableCell>
            <TableCell align="center">Science</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
          <TableCell component="th" scope="row">
              <TextField id="outlined-basic" label="ID" variant="outlined" value={id} onChange={(e)=>setId(e.target.value)} />
            </TableCell>
           <TableCell align="center">
              <TextField id="outlined-basic" label="First Name" variant="outlined" value={first_name} onChange={(e)=>setFirstName(e.target.value)} />
            </TableCell>
            <TableCell align="center">
            <TextField id="outlined-basic" label="Last Name" variant="outlined" value={last_name} onChange={(e)=>setLastName(e.target.value)} />
            </TableCell>
            <TableCell align="center">
            <TextField id="outlined-basic" label="Maths" variant="outlined" value={maths} onChange={(e)=>setMaths(e.target.value)} />
            </TableCell>
            <TableCell align="center">
            <TextField id="outlined-basic" label="English" variant="outlined" value={english} onChange={(e)=>setEnglish(e.target.value)} />
            </TableCell>
            <TableCell align="center">
            <TextField id="outlined-basic" label="Science" variant="outlined" value={science} onChange={(e)=>setScience(e.target.value)} />
            </TableCell>
            <TableCell align="center">
            <Button variant="contained" type="submit" endIcon={<SendIcon />}>Add</Button>
            </TableCell>
            </TableRow>
            </TableBody>
            </Table>
            </form>
     
    </div>
  )
}

export default CreateUser