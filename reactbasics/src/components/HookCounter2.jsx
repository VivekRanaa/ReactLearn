import React,{useState} from "react";
function HookCounter2() {
    const initialCount=0;
    const [count,setCount]=useState(initialCount)
    return (
        <>
            <h1>Count={count}</h1>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}

 export default HookCounter2
