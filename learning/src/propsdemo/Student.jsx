import React from 'react'
import { Studentdetail } from './Studentdetail'

export const Student = (props) => {
    var Users = [
        {
          id : 1,
          name: 'Akshat',
          age : '20'
        },
        {
          id : 2,
          name: 'Op',
          age : '21'
        },
        {
          id : 3,
          name: 'Neha',
          age : '30'
        }
      ]
    
      var SDstyle = {
          color : "blue"
      }
    
      return (
        <div>
          <Studentdetail stitle = {props.t} SDstyle = {SDstyle}/>
          <h1>{props.t}</h1>
           {
            Users.map((user)=>{
            return (
            <div> 
              <h1 style={props.s}>Name = {user.id}</h1>
              <h2>User = {user.name}</h2>
              <h3>Age = {user.age}</h3>
             </div> )
            })
          }
      </div>
      )
}
