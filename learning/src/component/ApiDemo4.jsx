import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ApiDemo4 = () => {
    var navigate = useNavigate();
    var postData = async(Data) => {
        // var objData = {
        //     "name": "morpheus",
        //     "job": "leader"
        // }
      

        var res = await axios.post("https://reqres.in/api/users?page=2",Data);
        if(res.status == 201){
            toast.success('Data Inserted', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            console.log(res.data)
            setTimeout(() => {
                navigate("/aboutus");
            }, 5100);
        }
    }
  
    const {register,handleSubmit,formState:{errors}} = useForm()
    return (
    <div>
        <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        {/* <button onClick={()=>{postData()}}>Create Data</button> */}
        <form onSubmit={handleSubmit(postData)}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" {...register('name',{required:true})}/>
            </div>
            <div>
                <label htmlFor="">Job</label>
                <input type="text" {...register('job',{required:true})} />
            </div>
            <div>
                <button type='submit'>SUBMIT</button>
            </div>
        </form>
    </div>
  )
}
