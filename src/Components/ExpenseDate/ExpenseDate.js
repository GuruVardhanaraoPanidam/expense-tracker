import "./ExpenseDate.css";

function ExpenseDate(props) {
  // JSX Code
  return (
    <div className="expense_date_container">
      <div>{props.month}</div>
      <div>{props.year}</div>
      <div className="expense_day">{props.day}</div>
    </div>
  );
}

export default ExpenseDate;
