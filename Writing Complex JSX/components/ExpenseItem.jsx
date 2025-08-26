import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(23 ,7 ,15).toISOString();
  const expenseLocation = "Bangalore"
  const expensePrice = 50
  const expenseTitle = "Insurance"
  return(

      <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__location">{expenseLocation}</div>
      <div className="expense-item__price">${expensePrice}</div>
    <div className="expense-item__description">{expenseTitle}</div>
  </div >
  )
}

export default ExpenseItem;