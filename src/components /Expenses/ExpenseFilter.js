import React from 'react';

const ExpenseFilter =(props) => {
    const changeExtendFilter =(event) => {
        props.onExpenseFilter(event.target.value);
    };
    return (
        <div>
            <div className="expenses-Filter">
                <label className="new-expense__controls">Filter by year</label>
                <select value={props.selected} onChange ={changeExtendFilter}> 
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;