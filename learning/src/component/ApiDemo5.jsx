import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ApiDemo5 = () => {
  
    const [users, setusers] = useState([])
    
    useEffect(() => {
      console.log("UseEffect called")
      getUserData();
    }, [])
    

    var getUserData= async() =>{
        try{
            const res = await axios.get("https://node5.onrender.com/user/user");
            console.log(res.data.data)
            setusers(res.data.data)
        }catch(err){
            alert("Something went wrong")
        }
    }

    const deleteUser = async (id) =>{
        console.log(id)
        const res = await axios.delete("https://node5.onrender.com/user/user/"+id)
        console.log(res.data)
        getUserData()
    }


    return (
    <div>
        {/* <button onClick={()=>{getUserData()}}>GET USER DATA</button> */}
        <table class='table table-dark'>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Status</th>
            </thead>
            <tbody>
                {
                    users?.map((user)=>{
                        return(
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.isActive ? "Active" : "Not Active"}</td>
                                <td>
                                    <button onClick={()=>{deleteUser(user._id)}} class='btn btn-danger'>DELETE</button>
                                    <Link to={`/update/${user._id}`} class='btn btn-primary'>EDIT</Link>
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
