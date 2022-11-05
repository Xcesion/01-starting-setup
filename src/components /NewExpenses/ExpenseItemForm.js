import React, { useState } from "react";

import "./ExpenseItemForm.css";

const ExpenseItemForm = (props) => {
  const [enterTitle, setEntertitle] = useState(""); //useState is providing multiple booleam, array, and objects.  //
  const titleChangeHandler = (event) => {
    setEntertitle(event.target.value);
  };

  const [enterAmount, setEnterAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };

  const [selectDate, setSelectDate] = useState("");
  const dateChangeHandler = (event) => {
    setSelectDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title: enterTitle,
        amount: enterAmount,
        date: new Date(selectDate)
    };
    props.onSaveExpenseData(expenseData);
    setEntertitle('');
    setEnterAmount('');
    setSelectDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label className="new-expense__label">Title</label>
          <input type="text" value = {enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label className="new-expense__label">Amount</label>
          <input
            type="number"
            value = {enterAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label className="new-expense__label">Date</label>
          <input
            type="date"
            value = {selectDate}
            min="2016-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className=" new-expense__actions ">
        <button type = "button" onClick={props.onCancel}>Cancel</button>
        <button type = "submit"> Add New Item!</button>
      </div>
    </form>
  );
};

export default ExpenseItemForm;
