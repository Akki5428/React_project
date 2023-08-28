import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export const ApiDemo6 = () => {
    var id = useParams().id
    var navigate = useNavigate()
    
    // var userobj = {
    //     name:'raaj',
    //     email:'raaj@gmail.com',
    //     age:23,
    //     isActive:true
    // }
    // const getUserById = async () => {
    // const res = await axios.get("https://node5.onrender.com/user/user/" + id);
    // console.log("single user:",res.data.data);
    //  }

    // useEffect(() => {
    //     getUserById()
    // }, [])
    
    
    const updateUser = async (data) =>{
        var userobj = {
            name:data.name,
            email:data.email,
            age:data.age,
            isActive:data.isActive == 'true' ? true : false
        }

        var res = await axios.put("https://node5.onrender.com/user/user/"+id,userobj)
        console.log(res.data.data)

        if(res.status==200){
            navigate("/apidemo5")
        }
    } 
 
    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues: async() =>{
            var res = await axios.get("https://node5.onrender.com/user/user/"+id)
            return res.data.data
        }
    })

    return (
    <div>
        <h1>ApiDemo6</h1>
        <form onSubmit={handleSubmit(updateUser)}>
            <div>
                <label htmlFor="">Name:</label>
                <input type="text" {...register('name')}/>
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="text" {...register('email')}/>
            </div>
            <div>
                <label htmlFor="">Age:</label>
                <input type="text" {...register('age')}/>
            </div>
            <div>
                <label htmlFor="">Status:</label>
                <input type="text" {...register('isActive')}/>
            </div>
            <button type='submit'>Update Data</button>
        </form>
    </div>
  )
}
