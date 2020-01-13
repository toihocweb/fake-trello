import { ADD_LIST, ADD_TASK } from "./types";

export const addList = title => dispatch => {
  dispatch({
    type: ADD_LIST,
    payload: title
  });
};
export const addTask = (id, title) => dispatch => {
  dispatch({
    type: ADD_TASK,
    title,
    id
  });
};
