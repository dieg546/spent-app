import { useReducer, createContext, type ReactNode} from "react"
import { budgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budget-reducer"
import { useMemo } from "react"

type BudgetContextProps={

    state: BudgetState,
    dispatch: React.Dispatch<BudgetActions>,
    amountSpent: number,
    amountAvalible: number

}

type BudgetProviderProps={

    children: ReactNode

}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider=({children}: BudgetProviderProps)=>{

    console.log("HOLAAAAA")

    const [state,dispatch] = useReducer(budgetReducer,initialState)

    const amountSpent = useMemo(() => state.expenses.reduce((total,expense)=>{

        return total + expense.amount 

    },0), [state.expenses,state.budget])

    const amountAvalible = useMemo(()=> state.budget - amountSpent ,[state.expenses,state.budget])

    console.log("Disponible ", state.budget)
    console.log("Gastado ", amountAvalible)

    return(
        <BudgetContext.Provider
        
            value={{
                state,
                dispatch,
                amountSpent,
                amountAvalible
            }}
        >
            {children}
        </BudgetContext.Provider>
    )

}