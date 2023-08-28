import React from 'react'
import { STUdetail } from './STUdetail'
import { useState } from 'react'
import './STU.css'

export const STU  = () => {
  
    function delstu(st){
        Student = Student.filter((st1)=>{
            return st.rno != st1.rno
        })

        setStudent(Student)
    }
   
    var [Student, setStudent] = useState([
        {
            rno : 1,
            name : 'Akshat',
            std : 12,
            School_name : 'VVM'

        },
        {
            rno : 2,
            name : 'Hardik',
            std : 10,
            School_name : 'AD high School'

        },
        {
            rno : 3,
            name : 'Ayush',
            std : 9,
            School_name : 'AS GANDHI'

        },
        {
            rno : 4,
            name : 'Dhruv',
            std : 12,
            School_name : 'ST.Xeviar'

        }

    ])

    return (
    <div>
        <h1 className='stdata'>Student Data</h1>
        <STUdetail Student= {Student} delstu = {delstu}/>
    </div>
  )
}
