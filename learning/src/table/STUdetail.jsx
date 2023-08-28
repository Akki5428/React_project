import React from 'react'

export const STUdetail = (props) => {
  return (
    <div>
    <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">ROLL NO</th>
      <th scope="col">Name</th>
      <th scope="col">STD</th>
      <th scope="col">School Name</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody>
    {
        props.Student.map((st)=>{
           return(
           <tr>
            <th scope="row">{st.rno}</th>
            <td>{st.name}</td>
            <td>{st.std}</td>
            <td>{st.School_name}</td>
            <td><button onClick={()=>{props.delstu(st)}} className='btn btn-danger'>DELETE</button></td>
          </tr>
           )
        })
    }
  </tbody>
</table>
    </div>
    
  )
}
