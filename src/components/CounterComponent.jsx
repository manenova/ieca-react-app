import useCounter from "../hooks/useCounter";

const CounterComponent = ()=> {
    const {counter, increment, decrement } = useCounter();

    return (
        <div className="flex gap-4 py-4 px-5">
        <h1 className="text-purple-800 text-3xl">{counter}</h1>
        <div className="flex gap-4">
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>

    </div>

        
    
       




    );
}

export default CounterComponent;