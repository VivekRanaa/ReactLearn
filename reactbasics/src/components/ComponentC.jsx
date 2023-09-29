import React,{Component} from "react";
import UserContext, {UserConsumer} from "./userContext.jsx";
import ComponentB from "./ComponentB.jsx";
class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username)=>{
                        return <h1>Hello {username}</h1>
                    }
                }
            </UserConsumer>
        );
    }
}

export default ComponentC
