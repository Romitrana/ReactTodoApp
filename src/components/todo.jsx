import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store";

export default function TODO({ todoInd, title }) {
  const dispatch = useDispatch();
  const selectedID = useSelector((state) => state.todos.selectedTodo);

  function handleSelectTodo() {
    dispatch(todoActions.setSelectedTodo(todoInd));
    console.log(selectedID);
  }

  function handleDelete(event) {
    event.stopPropagation(); // Prevents handleSelectTodo from triggering on delete
    dispatch(todoActions.delete(todoInd));
  }

  return (
    <div
      className={`todo ${todoInd === selectedID ? "isActive" : ""}`}
      onClick={handleSelectTodo}
    >
      <h4>{title}</h4>
      <p className="deleteTodo" title="delete" onClick={handleDelete}>
        <i className="fa-solid fa-xmark"></i>
      </p>
    </div>
  );
}
