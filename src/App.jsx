import "./App.css";
import Items from "./components/items";
import { useState } from "react";

const array = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  value: `Item ${index + 1}`,
}));

function App() {
  const [items, setItems] = useState(array);

  const addItem = () => {
    const totalItems = items.length;

    const newItem = {
      id: totalItems + 1,
      value: `Item ${totalItems + 1}`,
    };

    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <>
      <h1>Render 1 million items in react 🪐</h1>
      <button className="addItem" onClick={addItem}>
        Add new item 🧸
      </button>
      <section>
        <Items items={items} />
      </section>
    </>
  );
}

export default App;
