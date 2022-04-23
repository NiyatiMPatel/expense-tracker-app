import React, { useState } from "react";

import "./AddNewExpense.css";

import AddExpenseForm from "./AddExpenseForm";

const AddNewExpense = (props) => {
  const [formEdit, setFormEdit] = useState(false);

  const formEditHandler = () => {
    setFormEdit(true);
  };

  const formCancelHandler = () => {
    setFormEdit(false);
  };

  const newExpenseChangeHandler = (newExpense) => {
    const newExpenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onAddingNewExpense(newExpenseData);
    setFormEdit(false);
  };
  return (
    <div className="add-new-expense-wrapper">
      {!formEdit && (
        <button className="edit-button" onClick={formEditHandler}>
          Add New Expense
        </button>
      )}
      {formEdit && (
        <AddExpenseForm
          onNewExpenseChange={newExpenseChangeHandler}
          onFormCancel={formCancelHandler}
        />
      )}
    </div>
  );
};

export default AddNewExpense;
