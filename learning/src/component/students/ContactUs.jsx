import React from 'react'
import {Link} from 'react-router-dom';

export const ContactUs = () => {
  var users = [
    {
      id : 1,
      name : 'Akshat'
    },
    {
      id : 2,
      name : 'Bhavy'
    }
  ]
  return (
    <div>ContactUs
      <ul>
        <li><Link to = '/contactus/manager'>MANAGER</Link></li>
        <li><Link to = '/contactus/ceo'>CEO</Link></li>
        {/* <li><Link to = '/contactus/director/1000'>DIRECTOR</Link></li> */}
        {
          users.map((user)=>{
           return <li><Link to={`/contactus/director/${user.id}`}>{user.name}</Link></li>
          })
        }
        
      </ul>
    </div>
  )
}
