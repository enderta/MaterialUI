import React from 'react'
import {useState,useEffect} from 'react'
import {Container,Typography,Box} from '@mui/material'
import Appbar from './Appbar'
import Charts from './Charts'
import CreateUser from './CreateUser'
import TableCourse from './TableCourse'



const Courses = () => {
    const [course,setCourse] = useState([]);
    const [search,setSearch] = useState('');
    const [filter,setFilter] = useState([]);
   
  
    useEffect(()=>{
        fetch("http://localhost:4000/courses")
        .then(res=>res.json())
        .then((result)=>{
            setCourse(result);
            setFilter(result)
        }
        )
    }, []
    )
    const handleSearch=(e)=>{
        setSearch(e.target.value)
        const filtered=course.filter(course=>course.first_name.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilter(filtered)
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:4000/courses/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setCourse(course.filter(course=>course.id!==id))
        }).catch(err=>console.log(err))
    }
   
   


  return (
    <div>
        <Box header>
  <Appbar s={search} on={handleSearch}/>
  <br/>
    <br/>
    <br/>
    <br/>
  </Box>
   <Container>
   <Box>
   <TableCourse d={filter} on={handleDelete}/>
    </Box>
   </Container>
    <Box>
    <br/>
    <br/>
    
    </Box>
    <Box>
    <Container>
   <Typography variant={'h5'}>Chart</Typography>

    <Charts data={course}/>
    </Container>
    </Box>
    <br/>
    <br/>
    <Container>
        <CreateUser s={setCourse} c={course}/>
    </Container>
<br/>
<br/>

    </div>
  )
}

export default Courses