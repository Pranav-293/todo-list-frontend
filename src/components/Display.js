import React from "react";
import { useSelector } from "react-redux";
import ActiveDisplay from "./ActiveDisplay";
import AllDisplay from "./AllDisplay";
import CompletedDisplay from "./CompletedDisplay";
import AddTask from "./AddTask";
import SearchResult from "./SearchResult";

function Display() {
  const number = useSelector((state) => state.taskReducer.displayNumber);
  switch (number) {
    case 0:
      return (
        <div>
          <AllDisplay></AllDisplay>
          <AddTask className="add-task-container"></AddTask>
          <div className="search-result-container">
            <SearchResult></SearchResult>
          </div>
        </div>
      );
    case 1:
      return (
        <div>
          <ActiveDisplay></ActiveDisplay>
          <AddTask className="add-task-container"></AddTask>
          <div className="search-result-container">
            <SearchResult></SearchResult>
          </div>
        </div>
      );
    default:
      return (
        <div>
          <CompletedDisplay></CompletedDisplay>
          <AddTask className="add-task-container"></AddTask>
          <div className="search-result-container">
            <SearchResult></SearchResult>
          </div>
        </div>
      );
  }
}

export default Display;
