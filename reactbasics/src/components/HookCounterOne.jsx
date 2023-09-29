import React, {useState,useEffect} from "react";
function  hookCounterOne() {
    

    const [count, setCount] = useState(0);

    const [name, setName] = useState(" ");

    useEffect(() => {
       console.log("updated")
        document.title=`Clicked ${count} times`
    },[count]
    )
    
    return (
        <>
                <input type="text" value={name} onChange={event => setName(event.target.value)}/>
                <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
        </>
    )
}
 export default hookCounterOne
