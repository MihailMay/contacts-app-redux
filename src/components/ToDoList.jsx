import { useDispatch } from "react-redux";
const TodoList = ({tasks}) => {

  const delet =(e)=> {
    
  }

  return (<>
    <ul>
      {tasks.map((t, i) => (
        <li key={i}>
          <span>{t}</span>
          <form onSubmit={delet}>
            <input name="newtask" type="checkbox" checked={tasks.isDone} />
            <button type="submit">Delete</button>
          </form>
        </li>
      ))}
    </ul>
  </>);

};

export default TodoList;
