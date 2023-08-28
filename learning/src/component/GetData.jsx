import React from 'react'
import { useState } from 'react'

export const GetData = () => {
    const [name, setname] = useState()
    const [age, setage] = useState()
    const [name1, setname1] = useState()

    var GetDataFromLS = () => {
        setname(localStorage.getItem('name'))
        setage(localStorage.getItem('age'))
        setname1(sessionStorage.getItem('name'))

        var cookieData = document.cookie
        console.log(cookieData)
    }

    return (
    <div><h1>GetData</h1>
        <div>
            <button onClick={()=>GetDataFromLS()}>Get Data</button>
            {
                name?<h1>{name}</h1> : <h1>No Data</h1>
            }
            {
                age?<h1>{age}</h1> : <h1>No Data</h1>
            }
            {
                name1?<h1>{name1}</h1> : <h1>No Data</h1>
            }
            
        </div>
    </div>
  )
}
