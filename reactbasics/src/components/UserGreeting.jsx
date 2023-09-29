import React,{Component} from "react";
class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoggedIn: false
        }
    }
/*    log(){
        this.setState({
            isLoggedIn: true
        })
    }*/
    render() {

        return (
            this.state.isLoggedIn ?
                <h1>Welcome Vivek</h1> :
                <h1>Welcome Guest</h1>
        )
    }

        /*let message
        if(this.state.isLoggedIn){
            message=<h1>Welcome Vivek</h1>
        }
        else{
            message=<h1>Welcome Guest</h1>
        }*/

        /*if(this.state.isLoggedIn){
            return(
                <h1>Welcome Vivek</h1>
            )
        }
        else{
            return(
                <>
                    <h1>Welcome Guest</h1>
                    <button onClick={this.log}>LogIn</button>
                </>
            )

        }

    }*/
}
export default UserGreeting
