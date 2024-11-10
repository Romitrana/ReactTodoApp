import { createSlice, configureStore } from "@reduxjs/toolkit";

// Initial state with todos and selectedTodo
const initialTodoState = {
  todos: [
    { title: "title 1", description: "this is some dummy text....1" },
    { title: "title 2", description: "this is some dummy text....2" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
    { title: "title 3", description: "this is some dummy text....3" },
  ],
  selectedTodo: 0,
};

// Create slice for todos
const TodoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    add(state, action) {
      const existingTodo = state.todos.find(
        (todo) => todo.title === action.payload.title
      );

      if (!existingTodo && action.payload.title!=="") {
        if(state.todos.length===0){ 
          state.selectedTodo = 0;
        }
        state.todos.push({
          title: action.payload.title,
          description: action.payload.description || "",
        });
      }
    },

    delete(state, action) {
      state.todos = state.todos.filter((_, index) => index !== action.payload);

      // if (state.todos.length === 0) {
      //   state.selectedTodo = null; // Set to null if no todos are left
      // } else if (state.selectedTodo >= state.todos.length) {
      //   state.selectedTodo = state.todos.length - 1;
      // }
    },

    setSelectedTodo(state, action) {
      state.selectedTodo = action.payload;
    },

    update(state, action) {
      const { index, description } = action.payload;
      const todoToUpdate = state.todos[index];

      if (todoToUpdate) {
        todoToUpdate.description = description;
      }
    },
  },
});

const store = configureStore({
  reducer: { todos: TodoSlice.reducer },
});

export const todoActions = TodoSlice.actions;
export default store;
