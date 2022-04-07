import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem() {}

  return (
    <div className="container">
      <div className="heading">
        <span contentEditable="true">To-Do List</span>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span className="addButton">Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoItem text={todoItem} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
