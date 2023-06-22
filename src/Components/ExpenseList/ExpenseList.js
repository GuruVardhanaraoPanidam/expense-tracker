import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = (props) => {
  let expenseListTemplate = <li>No Expenses Found!.</li>;

  if (props.expenses.length > 0) {
    expenseListTemplate = props.expenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense} />
    ));
  }

  // JSX Code
  return <ul style={{ padding: "1rem 0" }}>{expenseListTemplate}</ul>;
};

export default ExpenseList;
