import { useDispatch } from "react-redux";
const TodoList = ({tasks}) => {
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    const value = e.target.elements.newtask.value;
    console.log(value);
    dispatch({ type: 'add', payload: value });
  }

  return (<>
    <ul>
      {tasks.map((t, i) => (
        <li key={i}>
            <span>{t}</span>
            <input name="newtask" type="checkbox" checked={tasks.isDone} />
            <button type="submit">Delete</button>
        </li>
      ))}
    </ul>
  </>);
};

export default TodoList;