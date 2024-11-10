import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../store";

export default function MessageBox() {
  const todos = useSelector((state) => state.todos.todos);
  const selectedID = useSelector((state) => state.todos.selectedTodo);
  const dispatch = useDispatch();

  // Only get description if selectedID is valid
  const selectedTodo = todos[selectedID] || { description: "" };
  const [description, setDescription] = useState(selectedTodo.description);
  const textInput = useRef();

  // Update description when selectedTodo changes
  useEffect(() => {
    if (selectedID !== null && todos[selectedID]) {
      setDescription(todos[selectedID].description);
    } else {
      setDescription("");
    }
  }, [selectedID, todos]);

  function handleChangeDescription(event) {
    const newDescription = event.target.value;
    setDescription(newDescription);
    if (selectedID !== null) {
      dispatch(todoActions.update({ index: selectedID, description: newDescription }));
    }
  }

  return (
    <div className="textArea">
      <textarea
        placeholder="Write your thoughts here..."
        ref={textInput}
        value={description} // Controlled input
        onChange={handleChangeDescription}
      />
    </div>
  );
}
