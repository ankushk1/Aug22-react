import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const [editing, setEditing] = useState({
    isEditing: false,
    id: ""
  });

  const onTodoAddHandler = () => {
    if (!input) return;
    // We directly dont update the array

    // const todoObj = {
    //   id: crypto.randomUUID(),
    //   text: input
    // }

    // const cloneArr = [...todoArr]
    // cloneArr.push(todoObj)
    // setTodoArr(cloneArr)

    setTodoArr([
      ...todoArr,
      {
        id: crypto.randomUUID(),
        text: input
      }
    ]);
    setInput("");
  };

  const onHandleDelete = (todoId) => {
    const filteredArr = todoArr.filter((todo) => todo.id !== todoId);
    setTodoArr(filteredArr);

    // Todo - Try doing delete with arr.splice
  };

  const onEditTodo = (todo) => {
    setInput(todo.text);
    setEditing({
      isEditing: true,
      id: todo.id
    });
  };

  const onTodoUpdateHandler = () => {
    const todoIndex = todoArr.findIndex((elem) => elem.id === editing.id);
    const cloneArr = [...todoArr];
    cloneArr[todoIndex] = {
      id: editing.id,
      text: input
    };
    setTodoArr(cloneArr);
    setInput("")
    setEditing({
      isEditing: false,
      id: ""
    })
  };

  return (
    <div>
      <div className="fs-3 mb-4">Todo App</div>

      <div className="d-flex justify-content-center ">
        <input
          type="text"
          className="form-control w-50 me-3"
          placeholder="Add Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {!editing.isEditing ? (
          <button className="btn btn-primary" onClick={onTodoAddHandler}>
            Add Todo
          </button>
        ) : (
          <button className="btn btn-warning" onClick={onTodoUpdateHandler}>
            Update Todo
          </button>
        )}
      </div>
      <div className="d-flex align-items-center flex-column mt-4">
        {todoArr.length > 0 ? (
          todoArr.map((todo, idx) => (
            <div key={idx} className="row w-sm-75 w-50 my-1">
              <h4 className="col-6 col-md-7 col-lg-8 text-start ">
                {todo.text}
              </h4>
              <div className="col-6 col-md-5 col-lg-4">
                <button
                  className="btn btn-info me-2"
                  onClick={() => onEditTodo(todo)}
                >
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
          ))
        ) : (
          <h4>No Todos Yet!</h4>
        )}
      </div>
    </div>
  );
};

export default Todo;
