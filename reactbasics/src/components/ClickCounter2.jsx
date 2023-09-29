import React,{Component} from "react";
class ClickCounter2 extends Component {

    render() {
    const { count,counter }=this.props
        return (

                <button onClick={counter}>Clicked {count} times</button>

        );
    }
}
export default ClickCounter2
