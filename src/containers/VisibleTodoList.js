import { VisibilityFilters, toggleTodo } from "../actions";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const getVisibleTodoList = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(item => !item.completed);
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(item => item.completed);
    case VisibilityFilters.SHOW_ALL:
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodoList(state.todos, state.filter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id))
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
