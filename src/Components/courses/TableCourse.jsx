import React from 'react'

import {Container,Typography,Button,Box,TableContainer,TableCell,TableRow,Table,TableBody,TableHead,} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
const TableCourse = (props) => {
  return (
    <div>
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
                {props.d.map(course=>(
                    <TableRow key={course.id}>
                        <TableCell>{course.id}</TableCell>
                        <TableCell>{course.first_name}</TableCell>
                        <TableCell>{course.last_name}</TableCell>
                        <TableCell>{course.maths}</TableCell>
                        <TableCell>{course.english}</TableCell>
                        <TableCell>{course.science}</TableCell>
                        <TableCell>
                            <Button color='error' variant="outlined" startIcon={<DeleteIcon />} onClick={()=>props.on(course.id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

export default TableCourse