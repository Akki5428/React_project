import React from 'react'
import { useForm } from 'react-hook-form'

export const Deposit = (props) => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    var ChangeData = (data) =>{
        props.user.map((acc)=>{
             if(acc.id == data.id){
                 var newamt = parseInt(acc.amount) + parseInt(data.damt)
                 console.log(newamt)
                 acc.amount = newamt
             }
        })
     }

     const validschema = {
        id:{
            required:{
                value: true,
                message:"ID Required..."
            },
            minLength:{
                value: 1,
                message:"Enter ID between 1 to 3"
            },
            maxLength:{
                value : 1,
                message : "Enter ID between 1 to 3"
            }
        },
        damt:{
            required:{
                value: true,
                message: "Amount Required"
            }
        }
    }

    return (
    <div>
        <h1>Deposit</h1>
        <form onSubmit={handleSubmit(ChangeData)}>
            <div>
                <label htmlFor="">ENTER ID:</label>
                <input type='text' {...register('id',validschema.id)}/>
                <span>{errors.id?.message}</span>
            </div>
            <div>
                <label htmlFor="">ENTER AMOUNT TO BE DEPOSIT:</label>
                <div>
                    <input type="text" {...register('damt',validschema.damt)}/>
                </div>
                <span>{errors.wamt?.message}</span>
            </div>
            <button type='sumbit'>Enter</button>
        </form>
    </div>
  )
}
