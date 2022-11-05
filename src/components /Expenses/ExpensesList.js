import React from "react";
import "./ExpensesList.css";
import ExpenseGenerator from "./ExpenseGenerator";

const ExpensesList = (props) => {
//   let expensesContent = <p className="no_expense">No Expenses In This Year.</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>
  }

  return(
  <ul className='expense-list'>
    {props.items.map((expense) => (
      <ExpenseGenerator
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
  );
};

export default ExpensesList;
