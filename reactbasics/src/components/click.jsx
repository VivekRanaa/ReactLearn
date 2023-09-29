import React from "react";
function click () {
    function clickHandler(){
        console.log("Button clicked");
    }
    return (
        <>
            <button onClick={clickHandler}>Click</button>
        </>
    )
}
export default click;