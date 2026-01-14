import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"


export default function BudgetTracker() {


    const {state,dispatch, amountAvalible, amountSpent} = useBudget()

    // const amountSpent = useMemo(() => state.expenses.reduce((total,expense)=>{

    //     return total + expense.amount 

    // },0), [state.expenses])

    // const amountAvalible = useMemo(()=> state.budget - amountSpent ,[state.expenses])

    console.log("OVER HERE ", amountAvalible)

    const percentajeCircular = useMemo(()=> ((amountSpent*100) /  state.budget).toFixed(2),[state.expenses])

    

    return (
        
        <>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className=" flex justify-center">

                    <CircularProgressbar

                        value={+percentajeCircular}
                        styles={buildStyles({

                            pathColor: '#3b82f6',
                            trailColor: '#F5F5F5',
                            textSize: 8,
                            textColor: '#3b82f6',
                            


                        })}

                        text={`${percentajeCircular}% Gastado`}

                    />

                </div>

                <div className=" flex flex-col justify-center items-center gap-8">

                    <button

                        type="button"
                        className=" bg-pink-600 w-full p-2 text-white uppercase font-bold 
                        rounded-lg cursor-pointer"
                        onClick={()=>dispatch({type:'restart-app'})}

                    >

                        Resetear App

                    </button>

                    <AmountDisplay

                        label="Presupuesto"
                        amount={state.budget}
                    
                    />

                    <AmountDisplay

                        label="Disponible"
                        amount={amountAvalible}
                    
                    />

                    <AmountDisplay

                        label="Gastado"
                        amount={amountSpent}
                    
                    />

                </div>

            </div>

        </>

    )
}
