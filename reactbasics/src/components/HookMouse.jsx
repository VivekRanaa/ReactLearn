import React,{useState,useEffect} from "react";

function HookMouse () {
    const [X,setX]=new useState(0)
    const [Y,setY]=new useState(0)
    const logmouse = e=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        document.addEventListener('mousemove',logmouse)
    },[])

    return (
        <>
           X= {X}   Y={Y}
        </>
    )
}
export default HookMouse
