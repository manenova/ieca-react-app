import { useRef } from "react";

const RefComponent = () =>{
    
    const inputRef = useRef();
    const focus = ()=>{
        console.log(inputRef)
        inputRef.current.focus();
    }

    const clear = () =>{
        inputRef.current.value = "";
    }

    const print = () =>{
        alert(inputRef.current.value)
    }
    
    return (
        <div className="bg-white  w-full flex-1">
            <div className="flex gap-4 py-4 px-5">
                <input id="input-test" type="text"ref={inputRef}/>
                <button className="text-white bg-purple-700  hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={focus}>Focus</button>
                <button className="text-white bg-purple-700  hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={clear}>Limpiar</button>
                <button className="text-white bg-purple-700  hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={print}>Imprimir</button>
            </div>
        </div>
    );
}

export default RefComponent;