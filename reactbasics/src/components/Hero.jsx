import React from "react";
function  Hero({heroname}) {
    if (heroname==="Joker")
        throw new Error('Not a hero')
    return (
        <>
                <h1>{heroname}</h1>
        </>
    )
}
 export default Hero
