import React from 'react'

export const Studentdetail = (props) => {
    return (
        <div>
          <h1 style={props.SDstyle}>
            Student Detail : {props.stitle}
          </h1>
        </div>
      )
}
