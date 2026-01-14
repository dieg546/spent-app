import { v4 as uuidv4 } from "uuid"
import type { DraftExpense, Expense } from "../types"

export type BudgetActions = 

    {type: 'add-budget',payload: {budget:number}}|
    {type: 'show-modal'} |
    {type: 'close-modal'} |
    {type: 'add-expense', payload:{expense: DraftExpense}} |
    {type: 'remove-expense', payload:{id: Expense['id']}} |
    {type: 'get-expense-by-id', payload:{id: Expense['id']}} |
    {type: 'update-expense', payload: {expense: Expense}} |
    {type: 'restart-app'}

export type BudgetState={

    budget:number,
    modal: boolean,
    expenses: Expense[],
    EditingId: Expense['id']

}

const initialBudget=() : number =>{

    const localStorageBudget = localStorage.getItem('budget')
    return localStorageBudget ? +localStorageBudget : 0

}

const initialExpenses= () : Expense[] => {

    const localStorageExpenses = localStorage.getItem('expenses')
    
    return localStorageExpenses? JSON.parse(localStorageExpenses) : []

}

// const clearLocalStorage = () =>{

//     localStorage.clear()

// }

export const initialState : BudgetState={

    budget: initialBudget(),
    modal: false,
    expenses: initialExpenses(),
    EditingId: ''

} 

const createExpense = (draftExpense: DraftExpense): Expense=>{

    return{

        ...draftExpense,
        id: uuidv4()

    }

}


export const budgetReducer=(

    state: BudgetState = initialState,
    action: BudgetActions

)=>{

    if(action.type==='add-budget'){

        const newBudget:number = action.payload.budget

        localStorage.setItem('budget',JSON.stringify(newBudget))

        return{
            ...state,
            budget:newBudget
        }

    }

    if(action.type==='show-modal'){

        return{
            ...state,
            modal: true
        }


    }

    if(action.type==='close-modal'){

        return{
            ...state,
            modal: false,
            EditingId:''
        }

    }

    if(action.type==='add-expense'){

        const expense = createExpense(action.payload.expense)

        return{

            ...state,
            expenses:[...state.expenses,expense],
            modal: false
        }

    }

    if(action.type==='remove-expense'){

        console.log("Eliminandooo")
        return {

            ...state,
            expenses: state.expenses.filter(expense => expense.id !== action.payload.id)

        }

    }

    if(action.type==='get-expense-by-id'){

        return{

            ...state,
            EditingId: action.payload.id,
            modal: true

        }

    }

    if(action.type==='update-expense'){

        return{
            ...state,
            EditingId:'',
            modal: false,
            expenses: state.expenses.map(expense => 
                    expense.id === action.payload.expense.id 
                    ? action.payload.expense 
                    : expense
                ),
            
            
        }

    }

    if(action.type==='restart-app'){

        // clearLocalStorage()

        return{
            ...state,
            budget: 0,
            expenses: []

        }

    }

    return state
}