
import React,{useContext} from "react";
import {ChannelContext} from "../App.jsx"
import {UserContext} from "../App.jsx"
 import userContext from "./userContext.jsx";
function ComponentContext() {
    const user=useContext(UserContext)
    const channel= useContext(ChannelContext)
    return (
        <>
            {user}
            {channel}
        </>
    )
}
 export default ComponentContext