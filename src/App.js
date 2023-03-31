import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import { AiOutlinePlus } from "react-icons/ai";
import "./App.css";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loadData, setSearchText, showAddTask } from "./redux/actions/Actions";
function App() {
  const dispatch = useDispatch();

  const showAddTaskBoolean = useSelector(state => state.taskReducer.showAddTaskBoolean);

  const showAddTaskComponent = () => {
    dispatch(showAddTask(!showAddTaskBoolean));
  };

  useEffect(() => {
    dispatch(loadData());
    dispatch(setSearchText(""));
  });

  return (
    <div className="parent">
      <div className="header-container">
        <Header></Header>
      </div>
      <div className=" bottom-body">
        <div className="sidebar-container">
          <Sidebar></Sidebar>
        </div>
        <div className="display-container">
          <Display></Display>
          <div className="add-button-container">
            <button className="add-button" onClick={showAddTaskComponent}>
              {" "}
              <AiOutlinePlus /> Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
