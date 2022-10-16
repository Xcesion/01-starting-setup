import ExpenseItem from "./components /Expenses/ExpenseItem";
import './App.css';


const App = () => {
  const  expenses = [
    {
      id: "e1",
      title: "Costco Gorcery",
      amount: 94.12,
      date: new Date(2021, 7, 14),
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
      date: new Date(2021, 10, 12),
    },
  ];

  return (
    <div>
      <h2 className="app-wording_header">Expense Tracker!</h2>
      <p className = "app-wording_para">This is a jurnal where I track my daily expenses</p>
      <ExpenseItem items={expenses}/> {/* parents components can only pass down to the child components and the curve brackets */}
    </div>
  );
}

export default App;
