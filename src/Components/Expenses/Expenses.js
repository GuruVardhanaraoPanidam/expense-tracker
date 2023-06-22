import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card/Card";
import ExpenseList from "../ExpenseList/ExpenseList";

import "./Expenses.css";

function Expenses(props) {
  const onExpenseYearChange = (selectedYear) => {
    props.onFilterByYear(selectedYear);
  };

  // JSX Code
  return (
    <div>
      <Card className="filter-card">
        <ExpenseFilter
          expenses={props.expenses}
          yearChange={onExpenseYearChange}
        />
      </Card>
      <ExpenseList expenses={props.expenses} />
    </div>
  );
}

export default Expenses;
