import React, {Component, PureComponent} from "react";
import Regularcomp from "./Regularcomp.jsx";
import PureComp from "./PureComp.jsx";
class Parentcomp extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            name:"Vivek"
        }
    }
    componentDidMount() {
        setInterval(()=>{this.setState({
            name:"Vivek"
        })},2000)
    }

    render() {
        console.log("Parent ren")
        return (
            <div>
                    ParentComponent
                <Regularcomp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        );
    }
}
export  default Parentcomp
