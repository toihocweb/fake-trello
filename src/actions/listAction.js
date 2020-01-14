import { ADD_LIST, ADD_TASK, DRAG_DONE } from "./types";

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

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId
) => dispatch => {
  dispatch({
    type: DRAG_DONE,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId
    }
  });
};
