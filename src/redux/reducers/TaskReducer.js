import {
  CHANGE_DISPLAY,
  SET_DATA,
  SET_SEARCH_TEXT,
  SHOW_ADD_TASK,
} from "../actions/ActionTypes";

const initialState = {
  activeTasks: [],
  completedTasks: [],
  displayNumber: 0,
  showAddTaskBoolean: false,
  searchText: "",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        activeTasks: action.payload.data.activeList,
        completedTasks: action.payload.data.completedList,
      };

    case CHANGE_DISPLAY:
      return {
        ...state,
        displayNumber: action.payload.num,
      };

    case SHOW_ADD_TASK:
      return {
        ...state,
        showAddTaskBoolean: action.payload.boolean,
      };

      case SET_SEARCH_TEXT:
        return {
          ...state,
          searchText: action.payload.searchText,
        }

    default:
      return state;
  }
};

export default taskReducer;
