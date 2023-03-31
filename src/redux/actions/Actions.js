import {
  CHANGE_DISPLAY,
  SET_DATA,
  SHOW_ADD_TASK,
  SET_SEARCH_TEXT,
} from "./ActionTypes";

export const loadData = () => {
  return async function (dispatch) {
    try {
      const res = await fetch("/api/allTodo");
      console.log(res);
      const data = await res.json();
      dispatch(setData(data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const completeTodo = (id) => {
  return async function (dispatch) {
    try {
      await fetch(`/api/completeTodo/${id}`, {
        method: "PUT",
      });
      dispatch(loadData());
    } catch (e) {
      console.error(e);
    }
  };
};

export const addTask = (taskText) => {
  return async (dispatch) => {
    try {
      await fetch("/api/addTodo", {
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: { "Content-Type": "application/json" },
      });
      dispatch(loadData());
    } catch (e) {
      console.error(e);
    }
  };
};

export const deleteTask = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`/api/deleteTodo/${id}`, {
        method: "DELETE",
      });
      dispatch(loadData());
    } catch (e) {
      console.error(e);
    }
  };
};

export const setData = (data) => {
  return {
    type: SET_DATA,
    payload: {
      data,
    },
  };
};

export const changeDisplay = (num) => {
  return {
    type: CHANGE_DISPLAY,
    payload: {
      num,
    },
  };
};

export const showAddTask = (boolean) => {
  return {
    type: SHOW_ADD_TASK,
    payload: {
      boolean,
    },
  };
};

export const setSearchText = (searchText) => {
  return {
    type: SET_SEARCH_TEXT,
    payload: {
      searchText,
    },
  };
};
