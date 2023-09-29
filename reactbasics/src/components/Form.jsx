import React,{Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: "",
            option : "angular"
        }
    }
    formhandler =event=>{
        this.setState({
            username: event.target.value
        })
    }
    selecthandler =event=>{
        this.setState({
            option: event.target.value
        })
    }

    render() {
        const {username}=this.state
        return (
            <form>
                    <div>
                        <label>Username</label><br/>
                        <input type='text' value={username}  onChange={this.formhandler}/>
                        <select value={this.state.option} onChange={this.selecthandler}>
                        <option value="react">React JS</option>
                        <option value="angular">Angular JS</option>
                        <option value="vue">Vue JS</option>
                        </select>
                    </div>
            </form>
        );
    }
}

export default Form
