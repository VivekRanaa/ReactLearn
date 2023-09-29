import Input from "./input.jsx";
import React,{Component} from "react";
class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef()
    }
    clickhandler = ()=>{
            this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <Input  ref={this.componentRef}/>
                <button onClick={this.clickhandler}>Focus Input</button>
            </div>
        );
    }
}
export default FocusInput
