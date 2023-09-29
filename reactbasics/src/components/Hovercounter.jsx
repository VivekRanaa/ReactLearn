import React,{Component} from "react";
import UpdatedComponent from "./withCounter";

class Hovercounter extends Component {

    render() {
        const {count,incrementcount} = this.props


        return (

                    <h2 onMouseOver={incrementcount}>Hovered {count} Times</h2>

        )
    }
}
export default UpdatedComponent(Hovercounter)
