import React, { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";

import ExpenseYearFilter from "./ExpenseYearFilter";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  const [yearSelected, setYearSelected] = useState("2020");

  const onYearFilterUpdate = (year) => {
    setYearSelected(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearSelected;
  });

  let expenseContent = <h2 className="expense-fallback">No expenses found.</h2>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }

  return (
    <div className="items-wrapper">
      <ExpenseYearFilter
        selectedYear={yearSelected}
        onYearFilterChange={onYearFilterUpdate}
      />
      <ExpenseChart data={filteredExpenses} />
      {expenseContent}
    </div>
  );
};

export default Expenses;
