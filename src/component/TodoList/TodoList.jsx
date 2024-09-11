import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux-toolkit/slice/TodoSlice";

const TodoList = ({getTodo}) => {
  let todos = useSelector(state => state.todos)
  let dispatch = useDispatch();

  let setToInput = (todo) => {
    getTodo(todo)
  }
  return (
    <div>
      <ul className="list-group">
        {
          todos.map((todo) => (
        <li key={todo?.id} className="list-group-item d-flex justify-content-between align-items-center">
          {todo?.todoName}
          <span className="badge">
            1<button className="btn btn-success" onClick={() => setToInput(todo)}>Update</button>{" "}
            <button className="btn btn-danger" onClick={()=> dispatch(deleteTodo(todo?.id))}>Delete</button>
          </span>
        </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TodoList;
