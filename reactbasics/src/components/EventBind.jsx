import React, {Component} from "react";


class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello'
        }
        // this.changemsg=this.changemsg.bind(this);
    }
  /*  changemsg(){
        this.setState(
            {message: 'Good Bye'}
        )
    }*/
    changemsg = ()=>{
        this.setState({
            message:'Goodbye'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changemsg}>click</button>
            </div>
        );
    }
}
export default EventBind
