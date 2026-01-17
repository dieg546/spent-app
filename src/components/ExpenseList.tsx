import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {

    const {state, dispatch} = useBudget()

    const isEmpty = useMemo(()=> state.expenses.length===0,[state.expenses])
    // console.log(isEmpty)

    const filteredExpenses = state.CurrentCategory ? 
        state.expenses.filter(expense => expense.category === state.CurrentCategory):
        state.expenses

    return (
        
        <>
        
            <div className=" mt-10">

                {isEmpty ? 
                    <p className=" text-gray-600 text-2xl font-bold">No hay gastos </p>
                : 
                
                    <div>

                        <p className="text-gray-600 text-2xl font-bold my-5">
                            {filteredExpenses.length!==0?'Listado de Gastos':'No hay gastos de esta categoria'}
                        </p>

                        

                        {filteredExpenses.map(expense=>(

                            <ExpenseDetail

                                key={expense.id}
                                expense={expense}
                            
                            />
                        ))}

                    </div>
                
                }

            </div>

        </>

    )
}
