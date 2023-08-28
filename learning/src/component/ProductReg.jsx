import React from 'react'
import { useForm } from 'react-hook-form'

export const ProductReg = () => {
    const {
        register,
        handleSubmit,
        formState : {errors},
    }= useForm();

    const psubmit = (data) => {
        alert("Submitted")
        console.log(data)
    }

    const validschema = {
        name:{
            required:{
                value : true,
                message : "Product name is Required"
            }
        } ,
        price:{
            min:{
                value:100,
                message:"Enter Price minimum 100"
            }
        },
        dsp:{
            required:{
                value: true,
                message:"Description required.."
            },
            minLength:{
                value:10,
                message:"Minimum 10 character Required"
            },
            maxLength:{
                value : 100,
                message : "Maximum 100 character Required"
            }
        }
    }
 
    console.log("error:",errors)
 
    return (
    <div>
        <h1>ProductReg</h1>

        <form onSubmit={handleSubmit(psubmit)}>
        <div>
            <label htmlFor="name" >Product Name:</label>
            <input type="text" {...register("name",validschema.name)}/>
            <span>{errors.name?.message}</span>
        </div>
        <div>
            <label htmlFor="price">Price:</label>
            <input type="number" {...register("price",validschema.price)}/>
            <span>{errors.price?.message}</span>
        </div>
        <div>
            <label htmlFor="dsp">Description:</label>
            <input type="text" {...register("dsp",validschema.dsp)}/>
            <span>{errors.dsp?.message}</span>
        </div>
        <div>
            <input type="submit" value="ADD" />
        </div>
        </form>

    </div>
  )
}
