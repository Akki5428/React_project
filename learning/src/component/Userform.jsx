import React, { useState } from 'react'

export const Userform = () => {
    
    var submit = (e) =>{
        e.preventDefault()
        console.log('Submit :',firstname,lastname,age,designation,gender)
    }

    var [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [age, setage] = useState('')
    const [designation, setdesignation] = useState('')
    const [gender, setgender] = useState('')
    
    var firstnameHandler = (e)=>{
        setfirstname(e.target.value)
    }

  
    return (   
    <div>
        <div><h1>Add User Form</h1></div>
        <form action="" onSubmit={submit}>
            <div>
                <label>First Name</label>
                <input type="text" name='firstname' placeholder='First Name' onChange={(e)=>{firstnameHandler(e)}}/>
            </div>
            <div>   
                <label>Last Name</label>
                <input type="text" name='lastname' placeholder='Last Name' onChange={(e)=>{setlastname(e.target.value)}}/>
            </div>
            <div>
                <label>Age</label>
                <input type="text" name='firstname' placeholder='Age' onChange={(e)=>{setage(e.target.value)}}/>
            </div>
            <div>
                <label>Designation</label>
                <input type="text" name='firstname' placeholder='Desgination' onChange={(e)=>{setdesignation(e.target.value)}}/>
            </div>
            <div>
                <label>Gender:</label>
                <input type="radio" value='male' name="gender" id="" onChange={(e)=>{setgender(e.target.value)}}/>MALE  
                <input type="radio" value='female' name="gender" id="" onChange={(e)=>{setgender(e.target.value)}}/>FEMALE
            </div>
            <div>
                <input type="submit" value="Add User" />
            </div>
        </form>
    </div>
  )
}
