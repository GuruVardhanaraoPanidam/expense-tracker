import React from "react";

import "./App.css";
import AddNewExpense from "./Components/AddNewExpense/AddNewExpense";
import Expenses from "./Components/Expenses/Expenses";

const expensesDetails = [
  {
    id: "exp1",
    name: "Dikin Air Conditioner",
    date: new Date("2023-07-11"),
    amount: 48000,
  },
  {
    id: "exp2",
    name: "LG Washing Mashine",
    date: new Date("2022-05-27"),
    amount: 37000,
  },
  {
    id: "exp3",
    name: "Samsung Refrigerator",
    date: new Date("2022-10-07"),
    amount: 18000,
  },
  {
    id: "exp4",
    name: "Work Desk and Chair",
    date: new Date("2021-01-02"),
    amount: 20000,
  },
  {
    id: "exp5",
    name: "Preeti Zodiak Mixer Grinder",
    date: new Date("2021-09-10"),
    amount: 12000,
  },
];

function App() {
  const [expenseData, setExpenseData] = React.useState(expensesDetails);

  const addNewExpenseHandler = (newExpenseDataObj) => {
    setExpenseData((preData) => [newExpenseDataObj, ...preData]);
  };

  const filterExpenseByYear = (selectedYear) => {
    setExpenseData(() =>
      expensesDetails.filter((expense) => {
        const dt = new Date(expense.date);
        const year = dt.getFullYear();

        if (year === parseInt(selectedYear)) {
          return expense;
        }
      })
    );
  };

  // JSX Code
  return (
    <div className="app_container">
      <AddNewExpense onAddNewExpense={addNewExpenseHandler} />

      <Expenses expenses={expenseData} onFilterByYear={filterExpenseByYear} />
    </div>
  );
}

export default App;
