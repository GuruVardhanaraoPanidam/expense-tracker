import React, { useState } from "react";

import "./NewExpenseEntryForm.css";

import Formatedate from "../../Utils/Formatedate";

const NewExpenseEntryForm = (props) => {
  const [enteredExpenseName, setEnteredExpenseName] = useState("");
  const [enteredExpenseAmount, setEnteredExpenseAmount] = useState("");
  const [enteredExpenseDate, setEnteredExpenseDate] = useState("");

  //   const handleExpenseNameChange = (event) => {
  //     setEnteredExpenseName(event.target.value);
  //   };

  //   const handleExpenseAmountChange = (event) => {
  //     setEnteredExpenseAmount(event.target.value);
  //   };

  //   const handleExpenseDateChange = (event) => {
  //     setEnteredExpenseDate(event.target.value);
  //   };

  const hadleInputValueChanges = (inputControlName, value) => {
    if (inputControlName === "expenseName") {
      setEnteredExpenseName(value);
    }
    if (inputControlName === "expenseAmount") {
      setEnteredExpenseAmount(value);
    }
    if (inputControlName === "expenseDate") {
      setEnteredExpenseDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      id: `exp${Math.random * 10}`,
      name: enteredExpenseName,
      amount: enteredExpenseAmount,
      date: Formatedate(enteredExpenseDate),
    };

    props.onAddExpense(expenseData);

    // clear all fields after submit
    setEnteredExpenseName("");
    setEnteredExpenseAmount("");
    setEnteredExpenseDate("");
  };

  const handleCacelAddExpense = () => {
    props.onCancel();
  };

  // JSX Code ...
  return (
    <form onSubmit={submitHandler}>
      <div className="form-container">
        <div className="form-item">
          <label htmlFor="expenseName">Expense Name:</label>
          <input
            type="text"
            id="expenseName"
            name="expenseName"
            value={enteredExpenseName}
            onChange={(event) =>
              hadleInputValueChanges("expenseName", event.target.value)
            }
          />
        </div>

        <div className="form-item">
          <label htmlFor="expenseAmount">Expense Amount:</label>
          <input
            type="number"
            id="expenseAmount"
            name="expenseAmount"
            value={enteredExpenseAmount}
            onChange={(event) =>
              hadleInputValueChanges("expenseAmount", event.target.value)
            }
          />
        </div>

        <div className="form-item">
          <label htmlFor="expenseDate">Date:</label>
          <input
            type="date"
            id="expenseDate"
            name="expenseDate"
            value={enteredExpenseDate}
            onChange={(event) =>
              hadleInputValueChanges("expenseDate", event.target.value)
            }
          />
        </div>
      </div>
      <button type="submit" className="add-expense-btn">
        Add Expense
      </button>
      <button
        className="add-expense-btn"
        onClick={() => handleCacelAddExpense()}
      >
        Cancel
      </button>
    </form>
  );
};

export default NewExpenseEntryForm;
