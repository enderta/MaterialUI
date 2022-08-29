import React from 'react'
import {useState,useEffect} from 'react'
import {Container,Paper,TextField,Button} from '@mui/material'

const Student = () => {
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[students,setStudents]=useState([])
    const[search,setSearch]=useState('')
    const[filter,setFilter]=useState([])


   
    const handleDelete=(id)=>{
        setStudents(students.filter(student=>student.id!==id))
    }

    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,address}
        console.log(student)
        fetch("http://localhost:4000/student/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student)
    
      }).then(()=>{
        console.log("New Student added")
      })
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
        const filtered=students.filter(student=>student.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilter(filtered)
      }
        
    console.log(students)
  return (
    <div>
        <Container>
        <Paper>
        <form>
        <TextField label="search" value={search} onChange={handleSearch}/>
        </form>
        </Paper>
                    <Paper>
            <form>
            <TextField label="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <TextField label="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
            <Button onClick={handleClick}>Add</Button>
            </form>
            </Paper>
            <Paper>
            <ul>
                {filter.map(student=>(
                    <li key={student.id}>
                        {student.name} - {student.address}
                        <Button onClick={()=>handleDelete(student.id)}>Delete</Button>
                    </li>
                ))}
            </ul>
            </Paper>
        </Container>

    </div>
  )
}

export default Student