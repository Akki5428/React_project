import userEvent from '@testing-library/user-event'
import React from 'react'
import { useForm, useFormContext, useFormState } from 'react-hook-form'

export const StudentReg = () => {
    const {register,handleSubmit} = useForm()

    const submit = (data) => {
        console.log(data);
    }
  
    return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" {...register("name")}/>
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" {...register("email")}/>
        </div>
        <div>
            <label htmlFor="age">Age:</label>
            <input type="number" {...register("age")} />
        </div>
        <div>
            <label htmlFor="gender">Gender:</label>
            <br />
            Male<input type="radio" name="gender" value="Male" {...register("gender")}/>
            Female<input type="radio" name="gender" value="Female" {...register("gender")}/>
        </div>
        <div>
            <select {...register("stream")}>
                <option value="science">Science</option>
                <option value="commerce">Commerce</option>
                <option value="arts">Arts</option>
            </select> 
        </div>
        <div>
            <br />
            <input type="submit" value=" Submit " />
        </div>
        </form>
    </div>
  )
}
