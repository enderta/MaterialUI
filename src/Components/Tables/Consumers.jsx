import { TextField,Table,TableRow,TableCell,TableBody } from '@mui/material'
import React from 'react'

const Consumers = () => {
    const [consumers, setConsumers] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [search, setSearch] = React.useState('')
    const[filter, setFilter] = React.useState([])

    const getConsumers = async () => {
       
        let options={
            method:"GET",
            
            redirect:"follow"
        }
        let response=await fetch("https://randomuser.me/api/?results=5",options)
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
console.log(filter.map(consumer => consumer['name'].first))





  return (
    <div>Consumers
    <div>
        <TextField id="standard-basic" label="Search" value={search} onChange={handleSearch} />
        </div>
        <div>
        {
            loading ? <h1>Loading...</h1> :
            <Table>
                <TableBody>
                    {
                        filter.map(consumer => (
                            <TableRow key={consumer.name.first}>
                                <TableCell>{consumer.name.first}</TableCell>
                                <TableCell>{consumer.name.last}</TableCell>
                                <TableCell>{consumer.email}</TableCell>
                                <TableCell>{consumer.phone}</TableCell>
                                <TableCell>{consumer.location.city}</TableCell>
                                <TableCell>{consumer.location.state}</TableCell>
                                <TableCell>{<img src={consumer.picture.thumbnail} />}</TableCell>
                                </TableRow>
                        ))
                        }
                </TableBody>
            </Table>

        }

    </div>
    </div>
  )
}

export default Consumers