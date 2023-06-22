import { useState } from "react";

import "./AddNewExpense.css";
import Card from "../UI/Card/Card";
import NewExpenseEntryForm from "../NewExpenseEntryForm/NewExpenseEntryForm";

const AddNewExpense = (props) => {
  const btnTemplate = (
    <button className="add-expense-btn" onClick={() => addNewExpenseHandler()}>
      Add New Expense
    </button>
  );

  const formTemplate = (
    <NewExpenseEntryForm
      onAddExpense={(newExpenseObj) => addExpenseHandler(newExpenseObj)}
      onCancel={() => cancelHandler()}
    />
  );

  const [addNewExpenseTemplate, setAddNewExpenseTemplate] =
    useState(btnTemplate);

  const cancelHandler = () => {
    setAddNewExpenseTemplate(btnTemplate);
  };

  const addExpenseHandler = (expenseDataObj) => {
    props.onAddNewExpense(expenseDataObj);
    setAddNewExpenseTemplate(btnTemplate);
  };
  const addNewExpenseHandler = () => {
    setAddNewExpenseTemplate(formTemplate);
  };

  //JSX Code...
  return <Card className="add-expense-container">{addNewExpenseTemplate}</Card>;
};

export default AddNewExpense;
