export type BudgetActions = 
    {type: 'add-budget',payload: {budget:number}}|
    {type: ''}

export type BudgetState={

    budget:number

}

export const initialState : BudgetState={

    budget: 0

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

    return state
}