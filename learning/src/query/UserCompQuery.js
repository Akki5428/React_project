import React, { useEffect } from 'react'
import { useFetchdata } from './UserQuery'
import { Dna } from 'react-loader-spinner';

export const UserCompQuery = () => {
    const {data,isLoading,isError} = useFetchdata();
    useEffect(() => {
      console.log("data: ",data)
      console.log("isLoading: ",isLoading)
      console.log("isError: ",isError)
    }, [isLoading])
    
    return (
    <div>
        <h1>React Query</h1>
        {
            isLoading == true && <div><Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          /><h1>Loading Data...</h1></div>
        }
        {/* {
            isLoading == true ?
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div> : null
        } */}
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.data?.data?.map((user)=>{
                        return(
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
