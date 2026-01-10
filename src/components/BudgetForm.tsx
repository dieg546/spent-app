import React, { useMemo, useState } from 'react'
import type { BudgetActions } from '../reducers/budget-reducer'

export type BudgetFormProps={

    dispatch: React.Dispatch<BudgetActions>,
    budget: number

}

export default function BudgetForm({dispatch,budget}:BudgetFormProps) {

    const [budget2,setBudget] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{

        setBudget(+e.target.value)

    }

    const isValidSubmit = useMemo(()=>{

        return budget>0 

    },[budget])

    return (
        <>
        
            <form action="" className=' space-y-5'>

                <div className='flex flex-col space-y-5'>
                    <label htmlFor="budget" className='text-4xl text-blue-600 font-bold text-center'>
                        Definir Presupuesto
                    </label> 

                    <input 
                        type="number" 
                        className=" w-full bg-white border border-gray-200 p-2"
                        placeholder='Define tu presupuesto'
                        name="budget" 
                        id="budget"
                        onChange={handleChange} 
                    />

                </div>

                <input 
                    type="submit" 
                    className='bg-blue-600 hover:bg-blue-700 cursor-pointer w-full
                    p-2 text-white font-bold uppercase disabled:opacity-25 disabled:cursor-default'
                    value='Definir Presupuesto'
                    disabled={!isValidSubmit}
                />

            </form>

        </>
  )
}
