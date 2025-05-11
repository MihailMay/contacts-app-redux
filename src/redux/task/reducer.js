import { combineReducers } from "redux";


export const tasksReducer = (state=['Do the dishes', 'Walk the dog'], action) => {
  if(action.type === 'add') {
    // state.push(action.payload)
    return [...state, action.payload]
  };
  console.log(state);

  return state;
};
export const taskReducer = (state="", action) => {
  if(action === "SETTASK"){
    
  }
  return state;
};


export const filterReducer = (state="", action) =>{
    return state
}

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  task: tasksReducer,
  filter: filterReducer,
});
