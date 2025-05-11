import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from './ToDoList';

const TodoListFull = () => {
  const tasks = useSelector((state) => state.tasks);
  const task = useSelector((state) => state.task)
  const dispatch = useDispatch()

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
      <TodoList tasks={tasks}></TodoList>
    </>
  );
};

export default TodoListFull;
