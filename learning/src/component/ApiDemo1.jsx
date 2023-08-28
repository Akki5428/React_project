import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const ApiDemo1 = () => {
    const [users, setusers] = useState([])
    
    var getUserData = async() =>{
        var res = await axios.get("https://reqres.in/api/users?page=2");
        console.log(res.status);
        console.log(res.data.data)
        setusers(res.data.data)
    }

    return (
    <div>
        <button onClick={()=>getUserData()}>Get User Data</button>
        <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Email</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Avatar</th>
    </tr>
  </thead>
  <tbody>
    {
            users?.map((user)=>{
                    return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>
                                    <img src={user.avatar} alt="" />
                                </td>
                            </tr>
                    )
            })
    }  
  </tbody>
</table>

    </div>
  )
}
