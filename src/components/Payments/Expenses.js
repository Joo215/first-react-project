import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesRange from "./ExpensesRange";

const Expenses = (props) => {
  const [filterPrice, setFilterPrice] = useState(100);

  const rangeFilter = (selectedPrice) => {
    setFilterPrice(selectedPrice);
  };
  const filteredExpenses = props.items.filter((item) => {
    return item.amount <= filterPrice;
  });

  return (
    <Card className="expenses">
      <ExpensesRange onchange={rangeFilter} />
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      ) : (
        <p>No Data</p>
      )}
    </Card>
  );
};

export default Expenses;
