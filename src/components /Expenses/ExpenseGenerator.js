import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate.js';
import Comp from "../UI/Comp";
import "./ExpenseGenerator.css";


function ExpenseGenerator(props) {
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = ()=>{
    setTitle('Updated!');
    console.log(title);
};
  return (
    <Comp className ='expense-item'>
        <ExpenseDate date= {props.date}/>
        <div className="expense-item__description">
            <h2> {title}</h2>  {/*the same attribute with app.js's name on line 31*/}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick ={clickHandler}>Change Title</button>
    </Comp>
  );
}

export default ExpenseGenerator;


//app.js -> exitem -> exgen-> exDate