import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filtredDate, setFiltredDate] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFiltredDate(selectedYear);
  };

  const filtredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() == filtredDate
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filtredDate}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filtredExpenses} />
        <ExpensesList items={filtredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
