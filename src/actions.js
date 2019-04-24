import dispatch from "redux";

//Action types section
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

//Action creators section

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  };
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index: index
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  };
}

//action creator bindings

/*export const dispatchAddTodo = text => dispatch(addTodo(text));
export const dispatchToggleTodo = index => dispatch(toggleTodo(index));
export const dispatchSetVisibilityFilter = filter =>
  dispatch(setVisibilityFilter(filter));*/
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
