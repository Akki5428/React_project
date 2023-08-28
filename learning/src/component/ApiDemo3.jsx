import axios from 'axios'
import React from 'react'

export const ApiDemo3 = () => {
 
    var getData = async () => {
        var res = await axios.get("https://visual-crossing-weather.p.rapidapi.com/history",
        {params: {
            startDateTime: '2019-01-01T00:00:00',
            aggregateHours: '24',
            location: 'Ahmedabad,India',
            endDateTime: '2019-01-03T00:00:00',
            unitGroup: 'us',
            dayStartTime: '8:00:00',
            contentType: 'csv',
            dayEndTime: '17:00:00',
            shortColumnNames: '0'
          },
          headers:{
            'X-RapidAPI-Key': '46316dd448msh2c08c565a7828e9p11b02ejsn1a714cf01853',
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
          }
    });
        console.log(res)
        console.log(res.data)
    }
 
    return (
    <div>
        <button onClick={()=>{getData()}}>Get Data</button>
    </div>
  )
}
