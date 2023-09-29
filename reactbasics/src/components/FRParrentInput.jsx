import React,{Component} from "react";
import FRInput from "./FRInput.jsx";
class FrParrentInput extends Component {
    constructor(props) {
        super(props);
        this.Inputref= React.createRef()
    }
    clickhandler = ()=>{
        this.Inputref.current.focus()
    }
    render() {
        return (
            <div>
                        <FRInput ref={this.Inputref}/>
                        <button onClick={this.clickhandler}>Focus Input</button>
            </div>
        );
    }
}
export default FrParrentInput