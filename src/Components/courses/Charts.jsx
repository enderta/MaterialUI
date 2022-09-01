import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';





const Charts = (props) => {
    
  return (
    <div>
 <BarChart
          width={1200}
          height={300}
          data={props.data}
          fill="#82ca9d"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} style={{background:"red"}} />
          <XAxis dataKey="first_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="maths" fill="lightGray" />
          <Bar dataKey="english" fill="#82ca9d" />
          <Bar dataKey="science" fill="#ffc658" />
        </BarChart>
    </div>
  )
}

export default Charts