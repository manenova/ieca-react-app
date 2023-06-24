const { useState } = require("react")

const useTodo = () =>{
    const [list, setList] = useState([]);

    const addTodo = (todo)=>{
        console.log(todo);
        setList([...list,{text: todo, done:false}]);
    }

    const removeTodo = (index) => {
        setList(list.filter((_,i)=>i !== index))
    }

    const updateTodo = (index,checked) =>{
        setList(
            list.map((todo,i) =>{
                if( i===index){
                    return {...todo, done:checked}
                }

                return todo;
            })
        );
    };

    return {
        list,addTodo, removeTodo,updateTodo
    }
};

export default useTodo;