import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";

function ToDoItem(props) {
  const isDoneStyle = {
    textDecoration: "line-through",
    color: "#808080"
  };

  const [isDone, setIsDone] = useState(false);

  function checkedBox() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <li>
        <Checkbox color="default" onChange={checkedBox} />
        <span
          contentEditable="true"
          type="text"
          size="15"
          className="todoInput"
          style={isDone ? isDoneStyle : null}
        >
          {props.text}
        </span>
        <IconButton className="deleteButton" size="small">
          <HighlightOffIcon
            onClick={() => {
              props.onClicked(props.id);
            }}
          />
        </IconButton>
      </li>
    </div>
  );
}

export default ToDoItem;
