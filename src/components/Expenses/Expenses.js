import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const selectYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          select={selectedYear}
          selectedYear={selectYearHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList  items={filteredItems}/>
      </Card>
    </div>
  );
};

export default Expenses;
