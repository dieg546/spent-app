export type Expense={

    id: string,
    amount: number,
    expenseName: string,
    category: string
    date: Value

}

export type DraftExpense = Omit<Expense,'id'> // Permite tomar todos los datos de Expense, menos el ID

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Category={

    id: string, 
    name: string,
    icon: string

}