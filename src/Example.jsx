import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Example = () => {
  const [course, setCourse] = React.useState([]);

  React.useEffect(()=>{
    fetch("http://localhost:4000/courses")
    .then(res=>res.json())
    .then((result)=>{
        setCourse(result);
      
    }
    )
}, []
)
  console.log(course)
  
  return (
    <div>
  
        <BarChart
          width={500}
          height={300}
          data={course}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="first_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="maths" fill="#8884d8" />
          <Bar dataKey="english" fill="#82ca9d" />
          <Bar dataKey="science" fill="#ffc658" />
        </BarChart>
 
    </div>
  )
}

export default Example