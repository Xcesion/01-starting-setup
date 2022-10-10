import "./ExpenseGenerator.css";

function ExpenseGenerator() {
  return (
    <div className="expense-item">
      <div>
        <div>Oct 10th,2022</div>
      </div>
      <div className="expense-item__description">
        <h2>Dinner</h2>
        <div className="expense-item__price">$692</div>
      </div>
    </div>
  );
}

export default ExpenseGenerator;
