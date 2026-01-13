import { categories } from "../data/Categories";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from "react";
import type { DraftExpense, Expense, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

const initialExpense={

    amount:0,
    expenseName:'',
    category:'',
    date: new Date()

}


export default function ExpenseForm() {

    const {state,dispatch, amountAvalible} = useBudget()

    
    const [expense, setExpense] = useState<DraftExpense>(initialExpense)

    const [prevAmount, setPrevAmount] = useState(0)

    const [error, setError] = useState('')

    useEffect(()=>{

        if(state.EditingId!==''){

            const initialExpensew= state.expenses.filter(item => item.id === state.EditingId)[0]
            setExpense(initialExpensew)
            setPrevAmount(initialExpensew.amount)
        }


    },[state.EditingId])

    const handleChangeDate=(value: Value)=>{

        
        setExpense({

            ...expense,
            date: value

        })      

    }


    const handleChange= (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>{

        const {name, value} = e.target

        const isAmountField = ['amount'].includes(name)

        setExpense({

            ...expense,
            [name] : isAmountField? +value : value

        })

    }

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{

        e.preventDefault()
        if(Object.values(expense).includes('')){
            setError('Todos los campos son obligatorios.')
            return 
        }

        if((expense.amount- prevAmount) > amountAvalible){
            setError('No puedes superar el monto disponible.')
            return 
        }

        if(state.EditingId){
            dispatch({type:'update-expense',payload:{expense:
                {
                    ...expense,
                    id: state.EditingId
                }}})
        }else{
            
            dispatch({type:'add-expense',payload:{expense}})
        }

        
        setExpense(initialExpense)
    }   

    return (
        <>
        
            <form action="" className=" space-y-5" onSubmit={handleSubmit}>

                <legend
                    className="uppercase text-center text-2xl font-black border-blue-500 border-b-4 py-2"
                >
                    {state.EditingId?`Actualizando Gasto`:`Nuevo Gasto`}
                </legend>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <div className=" flex flex-col gap-2">

                    <label 
                        htmlFor="expenseName"
                        className="text-xl"
                    >
                        Nombre Gasto:
                    </label>

                    <input 
                        type="text" 
                        id="expenseName"
                        name="expenseName"
                        placeholder=" Añade el nombre del gasto"
                        className=" bg-slate-100 p-2"
                        value={expense.expenseName}
                        onChange={handleChange}
                        
                    />

                </div>

                <div className=" flex flex-col gap-2">

                    <label 
                        htmlFor="amount"
                        className="text-xl"
                    >
                        Cantidad:
                    </label>

                    <input 
                        type="number" 
                        id="amount"
                        name="amount"
                        placeholder=" Añade el valor del gasto"
                        className=" bg-slate-100 p-2"
                        value={expense.amount}
                        onChange={handleChange}
                        
                    />

                </div>

                <div className=" flex flex-col gap-2">

                    <label 
                        htmlFor="category"
                        className="text-xl"
                    >
                        Cantidad:
                    </label>
                    
                    <select 
                        id="category"
                        name="category"
                        className=" bg-slate-100 p-2"
                        value={expense.category}
                        onChange={handleChange}
                    >
                        
                        <option value="">-- Seleccione --</option>

                        {categories.map(categorie=>(

                            <option 
                                value={categorie.id}
                                key={categorie.id}
                            >
                                {categorie.name}
                            
                            </option>

                        ))}

                    </select>

                </div>
                    
                
                <div className=" flex flex-col gap-2">

                    <label 
                        htmlFor="date"
                        className="text-xl"
                    >
                        Fecha:
                    </label>

                    <DatePicker
                    
                        className="bg-slate-100 p-2 border-0"    
                        value={expense.date}
                        onChange={handleChangeDate}
                    />  

                </div>

            
                <input 
                    type="submit" 
                    className=" uppercase bg-blue-600 cursor-pointer w-full p-2 text-white font-black rounded-lg"
                    value={state.EditingId? `Actualizar gasto`:`Registrar gasto`}
                
                />

            </form>

        </>
    )
}
