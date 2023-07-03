import Expenses from "./components/Expenses";

const items =[
  {
    date: new Date("2021-06-22"),
    title: "Car Insurance",
    price: 290.56
  },
  {
    date: new Date("2018-11-11"),
    title: "Bubble gum",
    price: 13.79
  },
  {
    date: new Date("2022-03-12"),
    title: "Loaf of bread",
    price: 5.42
  }
]

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items = {items} />
    </div>
  );
}

export default App;
