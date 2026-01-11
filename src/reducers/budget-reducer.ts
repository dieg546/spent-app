import { act } from "react"

export type BudgetActions = 
    {type: 'add-budget',payload: {budget:number}}|
    {type: 'show-modal'}|
    {type: 'close-modal'}

export type BudgetState={

    budget:number,
    modal: boolean

}

export const initialState : BudgetState={

    budget: 0,
    modal: false

} 

export const budgetReducer=(

    state: BudgetState = initialState,
    action: BudgetActions

)=>{

    if(action.type==='add-budget'){

        const newBudget:number = action.payload.budget

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
            modal: false
        }

    }

    return state
}