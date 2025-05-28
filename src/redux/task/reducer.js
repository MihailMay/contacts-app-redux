import { combineReducers } from "redux"; 

export const tasksReducer = (state=['Do the dishes'], action) => { 
  if(action.type === 'add') {
    return [...state, action.payload];
  };
  return state; 
}; 

export const taskReducer = (state="", action) => { 
  if(action.type === "SETTASK"){ 
    return action.payload;
  } 
  return state; 
}; 

export const filterReducer = (state="", action) => { 
  return state; 
}; 

export const rootReducer = combineReducers({ 
  tasks: tasksReducer, 
  task: taskReducer,
  filter: filterReducer, 
});