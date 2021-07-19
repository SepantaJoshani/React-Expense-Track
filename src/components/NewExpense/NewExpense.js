import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showContent, setShowContent] = useState(false);
  const postDataHandler = (postedData) => {
    const postData = {
      ...postedData,
      id: Math.random().toString(),
    };

    props.onAddExpenses(postData);
    setShowContent(false);
  };
  const showContentHandler = () => {
    setShowContent(true);
  };

  const cancelShowContentHandler = () => {
    setShowContent(false);
  };

  let content = <button onClick={showContentHandler}>Add New Expense</button>;

  if (showContent) {
    content = (
      <ExpenseForm
        onSaveExpenseData={postDataHandler}
        onCancel={cancelShowContentHandler}
      />
    );
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
