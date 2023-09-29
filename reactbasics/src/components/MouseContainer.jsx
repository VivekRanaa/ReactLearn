import React,{useState,useEffect} from "react";
function MouseContainer() {
    const[display,setDisplay]=new useState(true)
    return (
        <>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display &&<h1>Vivek Rana</h1>}
        </>
    )
}
export default MouseContainer
