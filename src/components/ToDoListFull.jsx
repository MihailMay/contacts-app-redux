import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoListFull = () => {
  const tasks = useSelector((state) => state.tasks);
   const task = useSelector((state) => state.task)
   const dispatch = useDispatch()
  return (
    <>
      <form>
        <input
          type="text"
          value={task}
          onChange={(e) => dispatch(setTask(e.target.value))}
        />
        <button type="submit">Add Tasks</button>
      </form>
      <TodoList tasks={tasks}></TodoList>
    </>
  );
};

export default TodoListFull;
