import React, { useState } from "react";
import "./Todo.css";
import TodoList from "../TodoList/TodoList";
import { useDispatch } from "react-redux";
import { addTodos, updateTodo } from "../../redux-toolkit/slice/TodoSlice";
import { v4 as uuidv4 } from "uuid";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [id, setId] = useState("");
  let dispatch = useDispatch();

  let addUpdateTodo = () => {
    if(id) {
      dispatch(updateTodo({id,todoName:inputValue}))
      setId("")
    } else {
      dispatch(addTodos({ id: uuidv4(), todoName: inputValue }));
    }
    setInputValue("");
  };

  let getTodo = (todo) => {
    setInputValue(todo?.todoName)
    setId(todo?.id)
    
  }
  return (
    <div className="col-md-10 mt-5 d-flex flex-column justify-content-center align-items-center">
      <div className="mb-3">
        <div className="d-flex">
          <div className="input-css">
            <input
              type="email"
              className="form-control"
              placeholder="Enter todo"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div>
            {" "}
            <button className="btn btn-primary" onClick={addUpdateTodo}>
              {id ? "Update" : "Add"} Todo
            </button>
          </div>
        </div>

        <div className="list">
          <TodoList getTodo = {getTodo} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
