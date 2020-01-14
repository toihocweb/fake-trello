import { ADD_LIST, ADD_TASK, DRAG_HAPPENED } from "./types";

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
  droppableIdSEnd,
  droppableIndexEnd,
  droppableIndexStart,
  draggableId
) => dispatch => {
  dispatch({
    type: DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdSEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId
    }
  });
};
