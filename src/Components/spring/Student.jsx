import React from 'react'
import {useState,useEffect} from 'react'
import {Container,Paper,TextField,Button,Box,TableContainer,TableCell,TableRow,Table,TableBody,TableHead,} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';



import Appbar from './Appbar'
const Student = () => {
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[students,setStudents]=useState([])
    const[search,setSearch]=useState('')
    const[filter,setFilter]=useState([])


   
    const handleDelete = (id) => {
      fetch(`http://localhost:4000/student/${id}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        }
      })
      .then(res=>res.json())
      .then(data=>{
        setStudents(students.filter(student=>student.id!==id))
      }).catch(err=>console.log(err))
    }



    

    const handleClick=(e)=>{
        e.preventDefault()
        let student={name,address}
        console.log(student)
        fetch("http://localhost:4000/student/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student)
    
      }).then(()=>{
        console.log("New Student added")
      })
      student={name:'',address:''}
    }
    useEffect(()=>{
        fetch("http://localhost:4000/student")
        .then(res=>res.json())
        .then((result)=>{
          setStudents(result);
          setFilter(result)
        }
      )
      },[])
      const handleSearch=(e)=>{
        setSearch(e.target.value)
        const filtered=students.filter(student=>student.name.toLowerCase().includes(e.target.value.toLowerCase())||student.address.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilter(filtered)
      }
      
     //delete student
     
    
  
    
    console.log(students)
  return (
    <div>
  <Box header>
  <Appbar s={search} on={handleSearch}/>
  </Box>
  <br />
  <br />
  <br />
  <div>
        <Container>
    
                    <Paper>
            <form>
            <TextField label="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <TextField label="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
            <Button onClick={handleClick}>Add</Button>
            </form>
            </Paper>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Delete</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {filter.map((student) => (
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
             
              <TableCell align="right">{student.address}</TableCell>
              <TableCell align="right"><Button color='error' variant="outlined" startIcon={<DeleteIcon />} onClick={()=>handleDelete(student.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>
</div>
    </div>
  )
}

export default Student