import React,{Component} from "react";


class Message extends Component {
    constructor(props) {
        super(props);
        this.state={
            message: 'Welcome Visitor'
        }
    }

    render() {


        return(
        <>
           <h1>{this.state.message} </h1>
            <button onClick={()=>this.setState({message: 'wow'}) }>Hello</button>
        </>
        )
    }
}
export default  Message