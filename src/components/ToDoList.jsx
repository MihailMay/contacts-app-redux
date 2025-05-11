
const TodoList = ({tasks}) => {
 
    console.log(tasks)
  return (
    <>
    <ul>
       {tasks.map((t, i) => {
          <li key={i}>
            <p>{t.name}</p>
            <input type="checkbox" checked={tasks.isDone} />
            <button>Delete</button>
          </li>
        })}
      </ul>
    </>
  );
};

export default TodoList;
