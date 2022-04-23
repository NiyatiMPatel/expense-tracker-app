import React, { useState } from "react";

import "./App.css";

import Expenses from "./components/ExpensesView/Expenses";

import AddNewExpense from "./components/AddExpense/AddNewExpense";

const dummyDatabase = [
  {
    id: "item-1",
    title: "Groceries",
    amount: 75,
    date: new Date(2020, 7, 14),
  },
  {
    id: "item-2",
    title: "Bus Pass",
    amount: 100,
    date: new Date(2021, 3, 12),
  },
  {
    id: "item-3",
    title: "Laptop",
    amount: 1500,
    date: new Date(2019, 3, 28),
  },
  {
    id: "item-4",
    title: "New Desk",
    amount: 80,
    date: new Date(2021, 6, 12),
  },
];

function App() {
  const [expense, setExpense] = useState(dummyDatabase);
  const addNewExpenseHandler = (newExpense) => {
    setExpense((previousState) => {
      return [newExpense, ...previousState];
    });
  };

  return (
    <div className="main-container">
      <AddNewExpense onAddingNewExpense={addNewExpenseHandler} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
