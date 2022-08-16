import React from 'react'
import { Chart } from "react-google-charts";

const Infilation = () => {
    const [inflation, setInflation] = React.useState([])
    React.useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '07475edaadmsh706c2d5e735b7aep1e4912jsnbb5010132758',
            'X-RapidAPI-Host': 'inflation-by-api-ninjas.p.rapidapi.com'
          }
        };
        
        fetch('https://inflation-by-api-ninjas.p.rapidapi.com/v1/inflation', options)
          .then(response => response.json())
          .then(data => {
            let c = [];
            c.push(['Country', 'Inflation']);
            data.forEach(element => {
                c.push([element.country, element.monthly_rate_pct]);
            });
            setInflation(c)
           
          }
          )
      }, [])
        console.log(inflation)
         
        const options = {
            // Africa
             colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
             backgroundColor: "yellow",
             datalessRegionColor: "black",
             defaultColor: "black",
           };
  return (
    <div>  <Chart
    chartType="GeoChart"
     width="100%"
     height="50%"
     data={inflation}
     options={options}
   /></div>
  )
}

export default Infilation