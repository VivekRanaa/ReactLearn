import React,{Component} from "react";
class HoverCounter2 extends Component {

    render() {
        const {count,counter}=this.props
        return (

                <h2 onMouseOver={counter}>Hovered {count} times</h2>

        );
    }
}
export default HoverCounter2
