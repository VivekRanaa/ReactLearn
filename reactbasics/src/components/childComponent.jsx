import React from "react";
function childComponent (props) {
    return (
        <>
            <button onClick={()=>props.greetHandler("child")}>GreetParent</button>
        </>
    )
}
export default childComponent;
