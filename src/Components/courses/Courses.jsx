import React from 'react'
import {useState,useEffect} from 'react'
import {Container,Paper,TextField,Button,Box,TableContainer,TableCell,TableRow,Table,TableBody,TableHead,} from '@mui/material'
import Appbar from './Appbar'
import Charts from './Charts'
import DeleteIcon from '@mui/icons-material/Delete';



const Courses = () => {
    const [course,setCourse] = useState([]);
    const [search,setSearch] = useState('');
    const [filter,setFilter] = useState([]);
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const[maths,setMaths] = useState(0);
    const[english,setEnglish] = useState(0);
    const[science,setScience] = useState(0);
  
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
    const handleClick=(e)=>{
        e.preventDefault()
        let course={firstName,lastName,maths,english,science}
        console.log(course)
        fetch("http://localhost:4000/courses/",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(course)
                
            }).then(()=>{
                console.log("New Course added")
            }).catch(err=>console.log(err))
            course={first_name:'',last_name:'',maths:0,english:0,science:0,id:course.length+1}
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
    <TableContainer>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Maths</TableCell>
                    <TableCell>English</TableCell>
                    <TableCell>Science</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {filter.map(course=>(
                    <TableRow key={course.id}>
                        <TableCell>{course.id}</TableCell>
                        <TableCell>{course.first_name}</TableCell>
                        <TableCell>{course.last_name}</TableCell>
                        <TableCell>{course.maths}</TableCell>
                        <TableCell>{course.english}</TableCell>
                        <TableCell>{course.science}</TableCell>
                        <TableCell>
                            <Button color='error' variant="outlined" startIcon={<DeleteIcon />} onClick={()=>handleDelete(course.id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    </Box>
   </Container>
    <Box>
    <br/>
    <br/>
    <Container>
    
        <Paper elevation={3}>
        <h1>Add New Course</h1>
            <form onSubmit={handleClick}>
                <TextField label="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                <TextField label="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                <TextField label="Maths" value={maths} onChange={(e)=>setMaths(e.target.value)}/>
                <TextField label="English" value={english} onChange={(e)=>setEnglish(e.target.value)}/>
                <TextField label="Science" value={science} onChange={(e)=>setScience(e.target.value)}/>
                <Button type="submit">Add</Button>
            </form>

        </Paper>
    </Container>
    </Box>
    <Box>
    <Container>
    <h1>Charts</h1>
    <Charts data={course}/>
    </Container>
    </Box>
    


    </div>
  )
}

export default Courses