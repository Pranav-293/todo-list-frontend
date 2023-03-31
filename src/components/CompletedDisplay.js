import React from "react";
import Tasks from "./Tasks";

function CompletedDisplay() {
  return (
    <div>
      <h2>Completed</h2>
      <Tasks isActive={false}></Tasks>
    </div>
  );
}

export default CompletedDisplay;
