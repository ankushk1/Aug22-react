import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [input, setInput] = useState("");
  const ALL = "ALL";
  const COMPLETED = "COMPLETED";
  const PENDING = "PENDING";

  const [filter, setFilter] = useState(ALL);

  // const initialStateVal = () => {
  //   const todosFromLS = JSON.parse(localStorage.getItem("todos"));
  //   return todosFromLS.length > 0 ? todosFromLS : [];
  // };

  const [todoArr, setTodoArr] = useState(() => {
    const todosFromLS = JSON.parse(localStorage.getItem("todos"));
    return todosFromLS.length > 0 ? todosFromLS : [];
  });
  
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
        text: input,
        isCompleted: false
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
    const todoItem = todoArr.find((elem) => elem.id === editing.id);
    const cloneArr = [...todoArr];
    cloneArr[todoIndex] = {
      id: editing.id,
      text: input,
      isCompleted: todoItem.isCompleted
    };
    setTodoArr(cloneArr);
    setInput("");
    setEditing({
      isEditing: false,
      id: ""
    });
  };

  const onCompleteToggle = (todo) => {
    const todoIndex = todoArr.findIndex((elem) => elem.id === todo.id);
    const cloneArr = [...todoArr];
    cloneArr[todoIndex] = {
      ...todo,
      isCompleted: !todo.isCompleted
    };
    setTodoArr(cloneArr);
  };

  const displayData = (todo) => {
    switch (filter) {
      case ALL:
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEditTodo={onEditTodo}
            onHandleDelete={onHandleDelete}
            onCompleteToggle={onCompleteToggle}
          />
        );
      case COMPLETED:
        return (
          todo.isCompleted && (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEditTodo={onEditTodo}
              onHandleDelete={onHandleDelete}
              onCompleteToggle={onCompleteToggle}
            />
          )
        );
      case PENDING:
        return (
          !todo.isCompleted && (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEditTodo={onEditTodo}
              onHandleDelete={onHandleDelete}
              onCompleteToggle={onCompleteToggle}
            />
          )
        );
      default:
        return;
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoArr));
  }, [todoArr]);

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
      <div className="d-flex justify-content-evenly mt-4 ">
        <button
          onClick={() => setFilter(ALL)}
          className={`${
            filter === ALL ? "btn btn-secondary" : "btn-outline-secondary"
          } btn`}
        >
          All
        </button>
        <button
          onClick={() => setFilter(COMPLETED)}
          className={`${
            filter === COMPLETED ? "btn btn-secondary" : "btn-outline-secondary"
          } btn`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter(PENDING)}
          className={`${
            filter === PENDING ? "btn btn-secondary" : "btn-outline-secondary"
          } btn`}
        >
          Pending
        </button>
      </div>
      <div className="d-flex align-items-center flex-column mt-4">
        {todoArr.length > 0 ? (
          todoArr.map((todo, idx) => displayData(todo))
        ) : (
          <h4>No Todos Yet!</h4>
        )}
      </div>
    </div>
  );
};

export default Todo;
