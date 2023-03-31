import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { showAddTask } from "../redux/actions/Actions";
import { useState } from "react";
import { addTask } from "../redux/actions/Actions";

function AddTask() {
  const addTaskBoolean = useSelector(
    (state) => state.taskReducer.showAddTaskBoolean
  );
  const dispatch = useDispatch();
  const hideAddTaskComponent = () => {
    dispatch(showAddTask(false));
  };

  const [text, setText] = useState("");
  const addNewTask = () => {
    if (text !== "") {
      dispatch(addTask(text));
      setText("");
      dispatch(showAddTask(false));
    }
  };
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      addNewTask();
    }
  };
  if (addTaskBoolean) {
    return (
      <div className="add-task">
        <div className="add-task-heading">Add Task</div>

        <input
          type="text"
          placeholder="Add a task.."
          value={text}
          onKeyDown={handleKeypress}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="add-task-buttons">
          <button className="close" onClick={hideAddTaskComponent}>
            Close
          </button>
          <button className=" add" onClick={addNewTask}>
            Add
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default AddTask;
