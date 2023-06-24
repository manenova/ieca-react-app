import { useState } from "react";

const ControlledComponet = () => {
    const [inputValue, setInputValue] = useState("");
    const [error,setError] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    
    const print = () =>{
        alert(inputValue);
    }

    const clear = () =>{
        setInputValue("");
    }

    const validate = () => {
        if(inputValue.length >10) 
        { 
            setError("El valor debe tener menos de 10 caracteres");
        }else{
            alert("El varlo es correcto :"+inputValue);
            setError("");
        }
    }

    return (
        <div className="bg-white  w-full flex-1">
            <div className="flex gap-4 py-4 px-5">
                <input text="text" value={inputValue} onChange={handleInputChange}/>
                 <button className="text-white bg-purple-700  hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={print}>Imprimir</button>
                 <button className="text-white bg-purple-700  hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={clear}>Limpiar</button>
                 <button className="text-white bg-purple-700  hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={validate}>Validar</button>
                
            </div>
            {!!error? <span className="text-red-500 text-xs">{error}</span>:null}
            <div className="flex gap-4 py-4 px-5">
                El valor del input es {inputValue}
            </div>
        </div>

    );

}

export default ControlledComponet;