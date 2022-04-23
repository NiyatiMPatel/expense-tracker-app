import React, { useState } from "react";

import "./AddExpenseForm.css";

const AddExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, date: event.target.value };
    });
  };

  const submitChangeHandler = (event) => {
    event.preventDefault();

    const addeddExpenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };

    props.onNewExpenseChange(addeddExpenseData);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitChangeHandler}>
      <div className="add-new-expense-form-wrapper">
        <div className="add-new-expense-form-field">
          <label>Title</label>
          <input
            value={userInput.title}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="add-new-expense-form-field">
          <label>Amount</label>
          <input
            value={userInput.amount}
            type="number"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="add-new-expense-form-field">
          <label>Date</label>
          <input
            value={userInput.date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="add-new-expense-form-submission">
        <button type="button" onClick={props.onFormCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
