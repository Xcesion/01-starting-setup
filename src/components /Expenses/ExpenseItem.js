
import ExpenseGenerator from './ExpenseGenerator';
import Comp from '../UI/Comp';
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Comp className = 'expenses_item'>
      <ExpenseGenerator
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseGenerator
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseGenerator
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseGenerator
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Comp>
  );
}

export default ExpenseItem;

/*
<ExpenseGenerator
    title={expenses[0].title}
    amount ={expenses[0].amount}
    date ={expenses[0].date}
    />
<ExpenseGenerator
    title={expenses[1].title}
    amount ={expenses[1].amount}
    date ={expenses[1].date}
    />
<ExpenseGenerator
    title={expenses[2].title}
    amount ={expenses[2].amount}
    date ={expenses[2].date}
    />
*/
