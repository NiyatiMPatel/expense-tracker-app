import React from "react";

import "./ExpenseYearFilter.css";

const ExpenseYearFilter = (props) => {
  const yearFilterChangeHandler = (event) => {
    props.onYearFilterChange(event.target.value);
  };
  return (
    <div className="Filter-wrapper">
      <div className="filter">
        <label> Filter By Year </label>
        <select value={props.selectedYear} onChange={yearFilterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseYearFilter;
