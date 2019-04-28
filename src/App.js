import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default App;
