import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {


    const {state, amountAvalible, amountSpent} = useBudget()

    // const amountSpent = useMemo(() => state.expenses.reduce((total,expense)=>{

    //     return total + expense.amount 

    // },0), [state.expenses])

    // const amountAvalible = useMemo(()=> state.budget - amountSpent ,[state.expenses])

    console.log("OVER HERE ", amountSpent)

    return (
        
        <>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className=" flex justify-center">

                    <img src="/grafico.jpg" alt="Grafica de gastos"/>

                </div>

                <div className=" flex flex-col justify-center items-center gap-8">

                    <button

                        type="button"
                        className=" bg-pink-600 w-full p-2 text-white uppercase font-bold 
                        rounded-lg"
                    
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
