import React,{Component} from "react";
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            count : 0
        }
    }
    counter=()=>{
        this.setState(prevState=>{
            return{count : prevState.count + 1}
        })

    }

    render() {

        return (
            <div>
              <button onClick={this.counter}>{this.state.count}</button>
            </div>
        );
    }
}

export default Counter