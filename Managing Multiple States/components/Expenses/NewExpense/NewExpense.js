import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

   const [isFormVisible, SetIsFormVisible] = useState(false);

  const showFormHandler = () => {
    SetIsFormVisible(true);
  };
  const hideFormHandler = () => {
    SetIsFormVisible(false);
}

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {...enteredExpenseData,
      id: Math.random().toString()};
    props.onAddExpense(expenseData);
    SetIsFormVisible(false);
  };
  return (
    <div className="new-expense">
       {!isFormVisible && (
      <button onClick = {showFormHandler}>Add Expense</button>
      )}
      {isFormVisible && (
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
      onCancel={hideFormHandler}
      />
      )}
    </div>
  );
};

export default NewExpense;
