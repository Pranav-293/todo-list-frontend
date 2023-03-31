import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeDisplay } from "../redux/actions/Actions";

function Sidebar() {
  const displayNumber = useSelector(state => state.taskReducer.displayNumber);
  const dispatch = useDispatch();

  const changeDisplayToAll = () => {
    dispatch(changeDisplay(0));
  };
  const changeDisplayToActive = () => {
    dispatch(changeDisplay(1));
  };
  const changeDisplayToCompleted = () => {
    dispatch(changeDisplay(2));
  };
 

  return (
    <div className="sidebar">
      <button className={displayNumber===0 ? "active" : "inactive"} onClick={changeDisplayToAll}>All</button>
      <button className={displayNumber===1 ? "active" : "inactive"} onClick={changeDisplayToActive}>Active</button>
      <button className={displayNumber===2 ? "active" : "inactive"} onClick={changeDisplayToCompleted}>Completed</button>
    </div>
  );
}

export default Sidebar;
