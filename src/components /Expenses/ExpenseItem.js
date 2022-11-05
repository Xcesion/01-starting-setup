import React, { useState } from 'react';

import './ExpenseItem.css';
import Comp from '../UI/Comp';
import ExpenseChart from './ExpenseChart';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const ExpenseItem = (props) => {
  const [filterYear, setFilterYear] = useState('2021');

  const ExpenseFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Comp className='expenses_item'>
        <ExpenseFilter
          selected={filterYear}
          onExpenseFilter={ExpenseFilterHandler}
        />
        <ExpenseChart expenses = {filteredExpenses}/>
        <ExpensesList items ={filteredExpenses}/>
      </Comp>
    </div>
  );
};

export default ExpenseItem;