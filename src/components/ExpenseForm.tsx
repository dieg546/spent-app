import { categories } from "../data/Categories";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ExpenseForm() {
  return (
    <>
    
        <form action="" className=" space-y-5">

            <legend
                className="uppercase text-center text-2xl font-black border-blue-500 border-b-4 py-2"
            >
                Nuevo Gasto
            </legend>

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
                    
                />

            </div>

            <div className=" flex flex-col gap-2">

                <label 
                    htmlFor="categorie"
                    className="text-xl"
                >
                    Cantidad:
                </label>
                
                <select 
                    id="categorie"
                    name="categorie"
                    className=" bg-slate-100 p-2"
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

                <DatePicker/>

            </div>

        
            <input 
                type="submit" 
                className=" uppercase bg-blue-600 cursor-pointer w-full p-2 text-white font-black rounded-lg"
                value="Registrar gasto"
            
            />

        </form>

    </>
  )
}
