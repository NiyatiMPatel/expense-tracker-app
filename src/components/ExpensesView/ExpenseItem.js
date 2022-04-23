import React from "react";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="items">
      <div className="date">
        <div className="date-month">{month}</div>
        <div className="date-year">{year}</div>
        <div className="date-day">{day}</div>
      </div>

      <div className="title-amount-wrapper">
        <h2>{props.title}</h2>
        <label>${props.amount}</label>
      </div>
    </div>
  );
}

export default ExpenseItem;
