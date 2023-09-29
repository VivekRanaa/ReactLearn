import React,{Component} from "react";
import ComponentC from "./ComponentC.jsx";
import UserContext from "./userContext.jsx";
class ComponentB extends Component {
    render() {

        return (
            <div>
                context {this.context}
               <ComponentC ></ComponentC>
            </div>
        );
    }
}
ComponentB.contextType = UserContext
export default ComponentB
