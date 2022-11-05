import React from "react";
import ExpenseDate from "./ExpenseDate.js";
import Comp from "../UI/Comp";
import "./ExpenseGenerator.css";

const ExpenseGenerator = (props)=> {
  // const [title, setTitle] = useState(props.title);//must called inside the components function and can not called inside the nested fucntion.//
  console.log("ExpenseGenerator is evaluated by React");
  // const clickHandler = ()=>{
  //   setTitle('Updated!');
  //   console.log(title);
  // };
  return (
    <li>
      <Comp className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2> {props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Comp>
    </li>
  );
};

export default ExpenseGenerator;

//app.js -> exitem -> exgen-> exDate
