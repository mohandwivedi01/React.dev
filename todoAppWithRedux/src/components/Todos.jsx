import React from "react";
import { useSelector, useDispatch  } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function  Todos() {
    const todos = useSelector((state) => state.todos)
    console.log(todos)
    const dispatch = useDispatch();
    return (
        <>
            <div className={`my-5 text-3xl font-bold `}>{ todos[0] ? "Your Todos" : "Please Add Todos"}</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between mt-4 px-4 pt-2 rounded bg-zinc-800"
                    >
                    <div className="text-white">
                        {todo.text}
                    </div>
                        <button 
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-sm"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos;