import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store";
export default function Header() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
    const selectedtodo = useSelector((state) => state.todos.selectedtodo);
  const inputTitle = useRef();
  function handleAddTodo() {
    dispatch(todoActions.add({ title: inputTitle.current.value }));
    inputTitle.current.value = "";
  }
  return (
    <header className="header">
      <input type="text" placeholder="Enter title here..." ref={inputTitle} value={todos[selectedtodo]}/>
      <button onClick={handleAddTodo} >Add Todo</button>
    </header>
  );
}
