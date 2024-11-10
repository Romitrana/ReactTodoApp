import TODO from "./todo";
import { useSelector } from "react-redux";
export default function Main() {
  const todos = useSelector((state) => state.todos.todos);
//   const selectedtodo = useSelector((state) => state.todos.);
  return (
    <main className="main">
      {todos.length ===0 ? <p className="notodo">Your Todo is Empty</p> : null}
      {todos.map((todo, index) => (
        <TODO key={index} todoInd={index} title={todo.title}/>
      ))}
    </main>
  );
}



