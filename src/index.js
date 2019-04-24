import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { todoApp } from "./reducer";
import { createStore } from "redux";
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "./actions";

export const store = createStore(todoApp);

//Testing new application;

console.log("Initializing redux todo app");

//subscribing event - any time store changes, we display a state
const unsubscribe = store.subscribe(() => console.log(store.getState()));

console.log(store.getState());

store.dispatch(addTodo("newest todo app"));
store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
