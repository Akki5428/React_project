import React from 'react'

export const Employeedetail = (props) => {
    console.log(props)
    return (
    <div>
        <h1>Employeedetail</h1>
        <button onClick={()=>{props.test("Royal")}}>New Click</button>

        <table class="table table-dark">
            <thead>
                <th>Employee Id</th>
                <th>Employees Name</th>
                <th>Employees Age</th>
                <th>Employee Designation</th>
                <th>ACTION</th>
            </thead>
            <tbody>
             {
                props.employee.map((emp)=>{
                    return(
                        <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.designation}</td>
                            <td><button onClick={()=>{props.objdel(emp)}} className='btn btn-danger'>DELETE</button></td>
                        </tr>
                    )
                })
             }       
            </tbody>    
        </table>
    </div>
  )
}
