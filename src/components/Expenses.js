import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
     <ExpenseItem 
        item = {props.items[0]} />
      <ExpenseItem
        item = {props.items[1]} />
      <ExpenseItem
        item = {props.items[2]}/>
    </div>
  );
}

export default Expenses;
