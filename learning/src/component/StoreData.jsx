import React from 'react'

export const StoreData = () => {
    var StoreDataInLocalStorage = () => {
        localStorage.setItem('name','Akshat')
        localStorage.setItem('age','20');
        sessionStorage.setItem('name','Bhavy');

        window.document.cookie = 'name=Royal';
        alert("Data Stored")
    }

    var RemoveData = () =>{
        localStorage.removeItem('name')
        // localStorage.clear()
        sessionStorage.removeItem('name')

    }

    return (
    <div>
        <h1>StoreData</h1>
        <div><button onClick={()=>{StoreDataInLocalStorage()}}>STORE DATA</button>
            <button onClick={()=>{RemoveData()}}>Remove Data</button>
        </div>
    </div>
  )
}
