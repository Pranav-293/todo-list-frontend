import React from "react";
import { useSelector } from "react-redux";
import Task from "./Tasks";

function SearchResult() {
  const searchText = useSelector((state) => state.taskReducer.searchText);
  if (searchText === "") {
    return <div></div>;
  } else {
    return (
      <div className="search-result">
        <Task isActive={true} search={true}></Task>
        <Task isActive={false} search={true}></Task>
        <div className="search-end">End of results.</div>
      </div>
    );
  }
}

export default SearchResult;
