import React, { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesRange = (props) => {
  const [selectedRange, setSelectedRange] = useState(100);
  const rangeHandler = (event) => {
    const newRangeValue = event.target.value;
    setSelectedRange(newRangeValue);
    props.onchange(newRangeValue);
  };
  return (
    <div className="expenses-filter">
      <label>Filter by Price</label>
      <input
        type="range"
        id="price"
        name="price"
        min="0"
        max="100"
        onChange={rangeHandler}
      />
      <span>{selectedRange}</span>
    </div>
  );
};

export default ExpensesRange;
