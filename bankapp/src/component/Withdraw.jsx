import React from 'react'
import { useForm } from 'react-hook-form'

export const Withdraw = (props) => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    var ChangeData = (data) =>{
       props.user.map((acc)=>{
            if(acc.id == data.id){
                var newamt = acc.amount - data.wamt
                if(newamt>=0){
                    acc.amount = newamt
                }
                else{
                    alert("You do not have much money")
                }
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
                value:1,
                message:"Enter ID between 1 to 3"
            },
            maxLength:{
                value : 12,
                message : "Enter ID between 1 to 3"
            }
        },
        wamt:{
            required:{
                value: true,
                message: "Amount required"
            }
        }
    }

    console.log(errors)

    return (
    <div>
        <h1>Withdraw</h1>
        <form onSubmit={handleSubmit(ChangeData)}>
            <div>
                <label htmlFor="">ENTER ID:</label>
                <input type="text" {...register('id',validschema.id)}/>
                <span>{errors.id?.message}</span>
            </div>
            <div>
                <label htmlFor="">ENTER AMOUNT TO BE WITHDRWAL:</label>
                <div>
                    <input type="text" {...register('wamt',validschema.wamt)}/>
                </div>
                <span>{errors.id?.message}</span>
            </div>
            <button type='sumbit'>Enter</button>
        </form>
    </div>
  )
}
