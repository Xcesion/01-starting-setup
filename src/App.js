import ExpenseItem from "./components /Expenses/ExpenseItem";
import NewExpenseItem from "./components /NewExpenses/NewExpenseItem";
import './App.css';
import { useState} from "react";
import OldExpenseCSV from "./components /CSV/OldExpenseCSV";


const  INITIAL_EXPENSE = [
  {
    id: "e1",
    title: "Costco Gorcery",
    amount: 94.12,
    date: new Date(2022, 10, 14),
  },
  { id: "e2", 
    title: "Valentine's Gift", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 5, 28),
  },
  {
    id: "e4",
    title: "New Monitor",
    amount: 450,
    date: new Date(2019, 10, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSE);

  const addExpenseHandler = (expense) =>{
    setExpenses( (preExpenses) => {
      return [expense, ...preExpenses];
    });
  };
  return (
    <div>
      <h2 className="app-wording_header">Expense Tracker!</h2>
      <p className = "app-wording_para">This is a journal where I track my daily expenses</p>
      <NewExpenseItem onExpenseHandler ={addExpenseHandler}/>
      <ExpenseItem items={expenses} /> {/* parents components can only pass down to the child components and the curve brackets */}
      <OldExpenseCSV/>
    </div>
  );
}

export default App;
