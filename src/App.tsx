import BudgetForm from "./components/BudgetForm"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseModal from "./components/modals/ExpenseModal"
import { useBudget } from "./hooks/useBudget"
import { useMemo } from "react"


function App() {
  
  // const [state, dispatch] = useReducer(budgetReducer,initialState)

  // const context = useContext(BudgetContext)
  // console.log(context)

  const {state, dispatch} = useBudget()

  console.log(state.budget)

  const isValidBudget = useMemo(()=>{

    return state.budget>0

  },[state.budget])

  return (
    <>
      
      <header className="bg-blue-600 py-8 max-h-72">

        <h1 className="uppercase text-center font-black text-4xl text-white">
          Planificador de Gastos
        </h1>

      </header>

      <div className=" max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">

        {isValidBudget ? <BudgetTracker/> : <BudgetForm/>}

        

      </div>

      {isValidBudget && (
        
        <ExpenseModal/>

      )}

      

    </>
  )
}

export default App
