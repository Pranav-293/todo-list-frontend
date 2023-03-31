import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";
import { completeTodo, deleteTask } from "../redux/actions/Actions";

function Tasks({ isActive, search = false }) {
  let activeTasks = useSelector((state) => state.taskReducer.activeTasks);
  let completedTasks = useSelector((state) => state.taskReducer.completedTasks);
  const searchText = useSelector((state) => state.taskReducer.searchText);
  const dispatch = useDispatch();
  const markComplete = (id) => {
    dispatch(completeTodo(id));
  };
  const deleteTodo = (id) => {
    dispatch(deleteTask(id));
  };

  if (search) {
    activeTasks = activeTasks.filter((item) =>
      item.text.toLowerCase().includes(searchText.toLowerCase())
    );
    completedTasks = completedTasks.filter((item) =>
      item.text.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  if (isActive) {
    return (
      <div className="tasks">
        {activeTasks.map((item) => (
          <div key={item._id} className="task-list-tile">
            <input className="radio-buttons" type="radio" onClick={() => markComplete(item._id)} />
            <div className="task-text">{item.text}</div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="tasks">
        {completedTasks.map((item) => (
          <div key={item._id} className="task-list-tile">
            <button onClick={() => deleteTodo(item._id)}>
              <RiDeleteBin5Fill />
            </button>
            <div className="task-text completed-text">{item.text}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Tasks;
