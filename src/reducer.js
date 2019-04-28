import { VisibilityFilters } from "./actions";
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "./actions";
import { combineReducers } from "redux";

const initialState = {
  filter: VisibilityFilters.SHOW_ALL,
  todos: []
};

//Reducer composition
// The handleTodos accepts state, but it is not the whole state of the application,
// but its just a slice. Todos array and handleTodos knows how to update this slice
// This is called reducer composition
function handleTodos(todoState = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todoState,
        { id: todoState.length, text: action.text, completed: false }
      ];
    case TOGGLE_TODO:
      return todoState.map((item, index) => {
        if (action.index === index) {
          return Object.assign({}, item, {
            completed: !item.completed
          });
          /* Such way should work as we create new item 
                        {
                            text: item.text,
                            completed: !item.completed
                        }*/
        }
        return item;
      });
    default:
      return todoState;
  }
}

function handleVisibilityFilter(
  filterState = VisibilityFilters.SHOW_ALL,
  action
) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return filterState;
  }
}

//Different way to create todoApp reducer

const todoAppReducer = combineReducers({
  filter: handleVisibilityFilter,
  todos: handleTodos
});

export function todoApp(state = initialState, action) {
  /* used before ES6
    if (typeof state === 'undefined') {
        return initialState;
    }
    */
  return {
    filter: handleVisibilityFilter(state.filter, action),
    todos: handleTodos(state.todos, action)
  };
}
