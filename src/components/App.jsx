import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

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

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

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
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onClicked={deleteItem}
            />
          ))}
        </ul>
      </div>
      <div>
        <Button
          color="secondary"
          onClick={() => setItems([])}
          variant="contained"
          startIcon={<DeleteIcon />}
        >
          Delete All
        </Button>
      </div>
    </div>
  );
}

export default App;
