import React from "react";

const TodoItem = ({ todo, onEditTodo, onHandleDelete , onCompleteToggle}) => {
  return (
    <div className="row w-sm-75 w-50 my-1">
      <h4 className="col-6 col-md-7 col-lg-8 text-start ">
        <span onClick={() => onCompleteToggle(todo)}>
          {!todo.isCompleted ? (
            <i className="fa-regular fa-hourglass me-2 fs-5"></i>
          ) : (
            <i className="fa-regular fa-square-check  me-2 fs-5"></i>
          )}
        </span>
        {todo.text}
      </h4>
      <div className="col-6 col-md-5 col-lg-4">
        <button className="btn btn-info me-2" onClick={() => onEditTodo(todo)}>
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => onHandleDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
