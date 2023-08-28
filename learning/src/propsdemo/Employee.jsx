import React, { useState } from 'react'
import { Employeedetail } from './Employeedetail'

export const Employee = () => {
    function test(name){
        alert("Test"+name)
    }

    function delObj(emp){
        console.log(emp)
        
        employee = employee.filter((e)=>{
            return e.id != emp.id
        })

        setemployee(employee)
    }

    var [employee, setemployee] = useState([
      {
        id: 1,
        name: "John",
        age: 30,
        designation: "Manager"
      },
      {
        id: 2,
        name: "Rajan",
        age: 25,
        designation: "Software Engineer"
      },
      {
        id: 3,
        name: "Rahul",
        age: 35,
        designation: "Team Lead"
      },
      {
        id: 4,
        name: "Rohit",
        age: 40,
        designation: "Sr. Software Engineer"
      }
    ])
  
    return (
    <div>

        <h1>Employee Data</h1>
        <button onClick={test}>Click me</button>
        <Employeedetail employee={employee} test = {test} objdel = {delObj}/>
    </div>
  )
}
