import { combineReducers } from "redux";


export const tasksReducer = (state=[], action) => {

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
