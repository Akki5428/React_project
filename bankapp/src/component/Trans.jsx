import React from 'react'

export const Trans = (props) => {
  return (
    <div>
        <h1>Trans</h1>
        <table class='table table-dark'>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Amout</th>
            </thead>
            <tbody>
                {
                    props.user.map((acc)=>{
                        return(
                            <tr>
                                <td>{acc.id}</td>
                                <td>{acc.name}</td>
                                <td>{acc.amount}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
