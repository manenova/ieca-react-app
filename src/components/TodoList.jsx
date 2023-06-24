import { useState } from "react";
import useTodo from "../hooks/useTodo";
import TodoItem from "./TodoItem";
import { useRef } from "react";

const TodoList = () =>{

    const [inputValue,setInputValue] = useState("");

    const {list, addTodo, removeTodo, updateTodo } = useTodo();
    
    const inputRef = useRef();

    return( 
    <div className="bg-gray-200 flex-1 w-full">
        <form className="">
            <input type="text" required ref={inputRef} onChange={({target})=> {
                setInputValue(target.value);
            }} />

            <button type="button" onClick={()=>{
                addTodo(inputValue);
                setInputValue("");
                inputRef.current.value = "";
            }}>Guardar</button>
        </form>
        <ul>
        {
            list.map((todo,index)=>( 
                    <TodoItem 
                        todo={todo} 
                        removeTodo={removeTodo} 
                        index={index} 
                        updateTodo={updateTodo}
                    /> 
                )
            )
        }
        </ul>
    </div>
    );
}

export default TodoList;