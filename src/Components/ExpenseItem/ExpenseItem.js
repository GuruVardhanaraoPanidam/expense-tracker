import "./ExpenseItem.css";
import Card from "../UI/Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Months from "../../Utils/Months";

function ExpenseItem(props) {
  const monthNames = Months;
  const dt = new Date(props.expense.date);

  const year = dt.getFullYear();
  const month = monthNames[dt.getMonth()];
  const day = dt.getDate();

  // JSX Code
  return (
    <li>
      <Card className="expense_container">
        <div className="expense_item">
          <ExpenseDate month={month} day={day} year={year} />
        </div>
        <div style={{ flexGrow: 1 }} className="expense_item expense_name">
          {props.expense.name.toUpperCase()}
        </div>
        <div className="expense_item expense_amount">
          Rs. {props.expense.amount}
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
