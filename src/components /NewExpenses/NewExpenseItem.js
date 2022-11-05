import React,{ useState} from "react";
import ExpenseItemForm from './ExpenseItemForm';

import './NewExpenseItem.css';

const NewExpenseItem = (props) =>{

    const [isEditing, setIsediting]= useState(false);

    const saveExpenseDataHandler = (enterExpenseData) =>{
        const expenseData ={
            ...enterExpenseData,
            id: Math.random().toString()
        };
       props.onExpenseHandler(expenseData);
       setIsediting(false);
    };

    const startEditingHandler = () => {
        setIsediting(true);
    };

    const endEditingHandler = () => {
        setIsediting(false);
    };

    return (
    <div className ='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense </button> }
        {isEditing &&<ExpenseItemForm onSaveExpenseData ={saveExpenseDataHandler}
        onCancel={endEditingHandler}/> }
    </div>
    );
};

export default NewExpenseItem;