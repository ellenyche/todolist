import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

function ToDoItem(props) {
  const isDoneStyle = {
    textDecoration: "line-through",
    color: "#808080"
  };

var inputText = {props.text};

  const [isDone, setIsDone] = useState(false);
  const [valueInput, setNewInput] = useState({inputText});

  function checkedBox() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  function updateItem() {

  }

  return (
    <div>
      <li>
        <Checkbox color="default" onChange={checkedBox} />
        <input
        onChange={updateItem}
          type="text"
          value={valueInput}
          className="todoInput"
          style={isDone ? isDoneStyle : null}
        />
      </li>
    </div>
  );
}

export default ToDoItem;
