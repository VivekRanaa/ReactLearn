import React,{Component} from "react";
import UpdatedComponent from "./withCounter.jsx";
class ClickCounter extends Component {

    render() {

        const {count,incrementcount} = this.props
        return (
            <>
                        <button onClick={incrementcount}> Clicked {count} times</button>
            </>
        );
    }
}
export default UpdatedComponent(ClickCounter)
