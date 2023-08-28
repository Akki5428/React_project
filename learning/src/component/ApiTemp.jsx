import axios from 'axios'
import React from 'react'

export const ApiTemp = () => {
  
    var Postdata = async () => {
        const data = {
            "_id":"64d91ca5c4e902e52e66b0b6",
            "name":"Akshat",
            "email":"Akshat@gamil.com",
            "age":20,
            "isActive":true,
            "__v":0
        }
        
        const res = await axios.post("https://node5.onrender.com/user/user",data);
        console.log(res.data)
    }  

    return (
    <div>
        <button onClick={()=>{Postdata()}}>Post data</button>
    </div>
  )
}
