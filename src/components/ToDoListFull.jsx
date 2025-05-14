import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from './ToDoList';
import { filterAction } from "../redux/task/action";

const TodoListFull = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state)=> state.filter)
  console.log(filter)
  const task = useSelector((state) => state.task)
  const filteredTasksArray = []
  const dispatch = useDispatch()
  
  
  const filterElements = (e) =>{
      dispatch(filterAction(e.target.value))
  }


  const addTask =(e)=> {
    e.preventDefault();
    const value = e.target.elements.newtask.value;
    console.log(value);
    dispatch({ type: 'add', payload: value });
  }

  return (
    <>
      <form onSubmit={addTask}>
        <input
        name="newtask"
          type="text"
          // value={task}
          // onChange={(e) => dispatch(setTask(e.target.value))}
        />
        <button type="submit">Add Tasks</button>
      </form>
      <input type="text" onChange={filterElements} />

      <TodoList tasks={filteredTasksArray}></TodoList>
    </>
  );
};

export default TodoListFull;
